import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Paynow = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");

  const handleonClick = () => {
    toast("Payment Successful");
    setIsLoading(true);
    setTimeout(() => {
      
      
     
      setIsLoading(false);
      navigate("/")
    }, 4500);
  };
  return (
    <Box textAlign="left" p="0px 10px 0px 0px">
      <Box mt="80px" border="2px solid grey" height="600px">
        <Box pl="20px" textAlign="left">
          <Text pt="20px" fontSize="2xl">
            Purchase Summary
          </Text>
          <Text>
            Billed in <span>US DOLLAR</span>
          </Text>
        </Box>
        <Box>
          <Flex p="20px 0px 0px 20px">
            <Box>
              <Text fontSize="15px">Premium plan</Text>
              <Text fontSize="15px">10,000 contacts*</Text>
              <Text fontSize="15px">150,000 email sends*</Text>
            </Box>
            <Box>
              <Text fontSize="15px">$286.08 / month</Text>
            </Box>
          </Flex>
        </Box>
        <Flex p="20px" justify="space-between">
          <Text>Tax</Text>
          <Text>$51.49</Text>
        </Flex>
        <Flex p="20px" justify="space-between">
          <Text>Total</Text>
          <Text>$337.57</Text>
        </Flex>
        <Button
          ml="20px"
          w="85%"
          mt="10px"
          bg="teal"
          color="white"
          _hover={{ bg: "teal", color: "white" }}
          onClick={handleonClick}
        >
          {isLoading ? <Spinner color="red.500" /> : "Pay Now"}
        </Button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          progress="1"
          
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          
        />
        <Text textAlign="left" pl="15px" fontSize="12px" pt="30px">
          By selecting “Pay Now”, I understand that I am enrolling in a
          subscription plan and I authorize Mailchimp to charge my payment
          method each month at the then-current list price (plus applicable
          taxes) unless I cancel. I can cancel anytime by going to my Billing
          page in the Account Settings.
        </Text>
      </Box>
    </Box>
  );
};

export default Paynow;
