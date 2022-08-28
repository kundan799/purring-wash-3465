import React from "react";
import styles from "./Markating.module.css";
import { Select, Button } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MarkatingAccordian from "../chakra/MarkatingAccordian";

const MarkatingPlatform = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.M_main}>
      <br />
      <br />
      <div className={styles.M_main1}>
        <div>
          <h1>How many contacts do you have?</h1>
        </div>
        <div>
          <Select height="4rem" bg="white">
            <option value="option1">500</option>
            <option value="option1">1,500</option>
            <option value="option2">25,00</option>
            <option value="option3">5,000</option>
            <option value="option3">10,000</option>
            <option value="option3">15,000</option>
            <option value="option3">20,000</option>
            <option value="option3">25,000</option>
            <option value="option3">30,000</option>
            <option value="option3">40,000</option>
          </Select>
        </div>
      </div>
      {/* ---------------ppricing section------------------------------ */}
      <br />
      <br />
      <div className={styles.M_main2}>
        <div className={styles.M1}>
          <h1>Premium</h1>
          <br />
          <p>
            Advanced features for pros who
            <br />
            need more customization.
          </p>
          <br />
          <br />
          <p>
            Starts at
            <br />
            <span style={{ fontSize: "45px" }}>₹23,000</span>
            <br />
            /month*
          </p>
          <Button
            colorScheme="teal"
            size="lg"
            width="100%"
            height="50px"
            borderRadius={"none"}
            onClick={()=>navigate("/payment")}
          >
           Buy Now
          </Button>
          <p>
            <Link to="#" style={{ color: "teal" }}>
              *Overages
            </Link>{" "}
            apply if contact or email send limit is exceeded.
          </p>
          <Link
            to="#"
            style={{ marginRight: "240px", borderBottom: "3px dotted teal" }}
          >
            Learn more
          </Link>
          <br />
          <br />
          <p>Everything in Standard, plus:</p>
          <h2>✔Advanced Segmentation</h2>
          <h2>✔Multivariate Testing</h2>
          <h2>✔Comparative Reporting</h2>
          <h2>✔Unlimited Seats & Role-Based Access</h2>
          <h2>✔Phone & Priority Support</h2>
          <br />
          <Link to="#" style={{ marginRight: "190px", color: "teal" }}>
            About Premium
          </Link>
          <br />
          <br />
          <p>
            Monthly email sends: 15x plan’s
            <br /> contact limit.
          </p>
        </div>
        {/* -------------second----------------------- */}
        <div className={styles.M1}>
          <h1>Standard</h1>
          <br />
          <p>
            Data-driven automation and
            <br />
            optimization tools for businesses
            <br />
            that want to grow faster.
          </p>
          <br />
          <br />
          <p>
            Starts at
            <br />
            <span style={{ fontSize: "45px" }}>₹1,150</span>
            <br />
            /month*
          </p>
          <Button
            colorScheme="teal"
            size="lg"
            width="100%"
            height="50px"
            borderRadius={"none"}
          >
            Buy Now
          </Button>
          <p>
            <Link to="#" style={{ color: "teal" }}>
              *Overages
            </Link>{" "}
            apply if contact or email send limit is exceeded.
          </p>
          <Link
            to="#"
            style={{ marginRight: "240px", borderBottom: "3px dotted teal" }}
          >
            Learn more
          </Link>
          <br />
          <br />
          <p>Everything in Standard, plus:</p>
          <h2>✔Customer Journey Builder + Branching Points</h2>
          <h2>✔Send Time Optimization</h2>
          <h2>✔Behavioral Targeting</h2>
          <h2>✔Custom Templates</h2>
          <h2>✔Dynamic Content</h2>
          <br />
          <Link to="#" style={{ marginRight: "190px", color: "teal" }}>
            About Standard
          </Link>
          <br />
          <br />
          <p>
            Monthly email sends: 15x plan’s
            <br /> contact limit.
          </p>
        </div>
        {/* ----------------------third----------------------- */}
        <div className={styles.M1}>
          <h1>Essentials</h1>
          <br />
          <p>
            Great for email-only senders who
            <br />
            want around-the-clock support.
          </p>
          <br />
          <br />
          <p>
            Starts at
            <br />
            <span style={{ fontSize: "45px" }}>₹770</span>
            <br />
            /month*
          </p>
          <Button
            colorScheme="teal"
            size="lg"
            width="100%"
            height="50px"
            borderRadius={"none"}
          >
            Buy Now
          </Button>
          <p>
            <Link to="#" style={{ color: "teal" }}>
              *Overages
            </Link>{" "}
            apply if contact or email send limit is exceeded.
          </p>
          <Link
            to="#"
            style={{ marginRight: "240px", borderBottom: "3px dotted teal" }}
          >
            Learn more
          </Link>
          <br />
          <br />
          <p>Everything in Standard, plus:</p>
          <h2>✔Email & Landing Page Templates</h2>
          <h2>✔Customer Journey Builder</h2>
          <h2>✔Custom Branding</h2>
          <h2>✔A/B Testing</h2>
          <h2>✔24/7 Email & Chat Support</h2>
          <br />
          <Link to="#" style={{ marginRight: "190px", color: "teal" }}>
            About Essentials
          </Link>
          <br />
          <br />
          <p>
            Monthly email sends: 10x plan’s
            <br /> contact limit.
          </p>
        </div>
        {/* -----------------forth-------------- */}
        <div className={styles.M1}>
          <h1>Free</h1>
          <br />
          <p>
            All the multi-channel tools you need
            <br />
            to build your business and grow
            <br />
            your audience.
          </p>
          <br />
          <br />
          <p>
            Starts at
            <br />
            <span style={{ fontSize: "45px" }}>₹0</span>
            <br />
            /month*
          </p>
          <Button
            colorScheme="teal"
            size="lg"
            width="100%"
            height="50px"
            borderRadius={"none"}
          >
            Buy Now
          </Button>
          <p>
            <Link to="#" style={{ color: "teal" }}>
              *Overages
            </Link>{" "}
            apply if contact or email send limit is exceeded.
          </p>
          <Link
            to="#"
            style={{ marginRight: "240px", borderBottom: "3px dotted teal" }}
          >
            Learn more
          </Link>
          <br />
          <br />
          <p>Everything in Standard, plus:</p>
          <h2>✔Marketing CRM</h2>
          <h2>✔Creative Assistant</h2>
          <h2>✔Website Builder</h2>
          <h2>✔Mailchimp Domain</h2>
          <h2>✔Forms & Landing Pagest</h2>
          <br />
          <Link to="#" style={{ marginRight: "190px", color: "teal" }}>
            About Free
          </Link>
          <br />
          <br />
          <p>
            Monthly email send limit is 10,000
            <br /> sends (daily limit of 2,000)
          </p>
        </div>
      </div>
      <br />
      <br />
      <Button
        colorScheme="teal"
        variant="outline"
        height="70px"
        width="250px"
        style={{ borderRadius: "none" }}
      >
        Campare our Plain
      </Button>
      <br />
      <br />
      <br />
      {/* -------------------------Prefer to pay as you go?--------------- */}
      <div className={styles.M_main3}>
        <div className={styles.M_main3_1}>
          <h1>
            Also included: Free tools for
            <br /> getting your business online
          </h1>
          <br />
          <p>
            All Marketing plans come with Free website and com
            <br />
            merce features, so you can build your dream online
            <br/>
            presence. But if you want more advanced tools for selling
            <br/>
            and scheduling, try combining your Marketing plan with a
            <br/>
            paid Websites & Commerce plan.
          </p>
          <br/>
          <br/>
          <Button
        colorScheme="teal"
        variant="outline"
        height="70px"
        width="350px"
        style={{ borderRadius: "none" ,marginRight:"300px"}}
      >
        See Website & Commerce Plain
      </Button>

        </div>
        {/* --------------------------------------------------------------- */}
        <div className={styles.M_main3_2}>
        <h1>
        Prefer to pay as you go?
           
          </h1>
          <br />
          <p>
          Instead of paying a monthly recurring charge, you can buy
            <br />
            email credits as needed through our Pay As You Go plan.
            <br/>
            It's best for infrequent senders.
           
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Button
        colorScheme="teal"
        variant="outline"
        height="70px"
        width="350px"
        style={{ borderRadius: "none" ,marginRight:"300px"}}
      >
        Learn More
      </Button>

        </div>
      </div>
      <br/>
      <br/>
      <br/>
      {/* ------------------------------two factor---------------- */}
      <div  className={styles.M_main3}>
        <div className={styles.M_main3_1}>
        <h1>
        Two-factor authentication 
            <br /> discount
          </h1>
          <br />
          <p>
          At Mailchimp, we’re serious about security. We offer a 10%
            <br />
            discount for 1 month when you add two-factor
            <br/>
            authentication to your Mailchimp account with an app like
            <br/>
            Google Authenticator or SMS two-factor authentication.
            <br/>
            <br/>
            
            Restrictions apply. See our full{"  "}<Link to="#" style={{color:"teal"}}>terms and conditions.</Link> 
          </p>
          <br/>
        
          <Button
        colorScheme="teal"
        variant="outline"
        height="70px"
        width="350px"
        style={{ borderRadius: "none" ,marginRight:"300px"}}
      >
        Get Started
      </Button>

        </div>
        <div className={styles.M_main3_2}>
        <h1>
        Rates for nonprofits and
            <br /> charities
          </h1>
          <br />
          <p>
          Mailchimp offers a 15% discount to nonprofits and
            <br />
            charities. To request the discount, sign up for a free
            <br/>
            account, and contact our Billing team with your username
            <br/>
            and a link to your organization’s website.
          
          </p>
          <br/>
          <br/>
          <br/>
          <Button
        colorScheme="teal"
        variant="outline"
        height="70px"
        width="350px"
        style={{ borderRadius: "none" ,marginRight:"300px"}}
      >
         Get Started
      </Button>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* -----------------------------------FAQs----------------------------- */}
      <div className={styles.M_main4}>
        <h1>FAQs</h1>
        <MarkatingAccordian/>

      </div>

      {/* ------------------------------You’ll be in good company----------------------
     */}
     <div className={styles.M_main5}>
        <h1>You’ll be in good<br/> company</h1>
        <div className={styles.M_main5_1}>
            <div className={styles.M_main5_1_1} ></div>
            <div className={styles.M_main5_1_2}></div>
            <div className={styles.M_main5_1_3}></div>
            <div className={styles.M_main5_1_4}></div>

        </div>

     </div>
    </div>
  );
};

export default MarkatingPlatform;
