import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";
  import { IoMdAdd } from 'react-icons/io';
  import { AiOutlineMinus } from 'react-icons/ai';

const MarkatingAccordian = () => {
    
  return (
    <div>
      <Accordion allowMultiple >
        <AccordionItem style={{borderTop:"2px solid #8c8c8c",borderBottom:"2px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton height={"100px"}>
                  <Box flex="1" textAlign="left">
                   <Link to="#" style={{color:"teal",fontSize:"30px"}}>What payment methods do you offer?</Link>
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="40px" />
                  ) : (
                    <IoMdAdd fontSize="40px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"2px solid #8c8c8c",borderBottom:"2px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton height={"100px"}>
                  <Box flex="1" textAlign="left">
                  <Link to="#" style={{color:"teal",fontSize:"30px"}}>How do I switch to a different plan?</Link>
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="40px" />
                  ) : (
                    <IoMdAdd fontSize="40px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"2px solid #8c8c8c",borderBottom:"2px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton height={"100px"}>
                  <Box flex="1" textAlign="left">
                  <Link to="#" style={{color:"teal",fontSize:"30px"}}>Can I buy credits instead?</Link>
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="40px" />
                  ) : (
                    <IoMdAdd fontSize="40px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"2px solid #8c8c8c",borderBottom:"2px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton height={"100px"}>
                  <Box flex="1" textAlign="left">
                  <Link to="#" style={{color:"teal",fontSize:"30px"}}>Do you have pricing for high-volume email senders?</Link>
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="40px" />
                  ) : (
                    <IoMdAdd fontSize="40px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem style={{borderTop:"2px solid #8c8c8c",borderBottom:"2px solid #8c8c8c"}}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton height={"100px"}>
                  <Box flex="1" textAlign="left">
                  <Link to="#" style={{color:"teal",fontSize:"30px"}}>What happens if I hit my contact or sending limit?</Link>
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="40px" />
                  ) : (
                    <IoMdAdd fontSize="40px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        
      </Accordion>
    </div>
  );
};

export default MarkatingAccordian;
