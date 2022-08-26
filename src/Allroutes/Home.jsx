import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../component/Footer";

const Home = () => {
  const navigate=useNavigate()
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });
  return (
    <div>
      <div className={styles.mainHome}>
        <div className={styles.Home1}>
          <div className={styles.home_1}>
            <h1>Grow your audience</h1>
            <h1>and your revenue</h1>
            <p>
              Win over new and repeat customers by sending emails
              <br /> and automations from a marketing platform that has
              <br /> expert advice built in.
            </p>
            <br />
            <Button colorScheme="teal" size="lg" width="200px" height="70px" onClick={()=>navigate("/signup")}>
              Sign Up
            </Button>
          </div>
          <div className={styles.home1_2}></div>
        </div>
        {/* --------------------Outperform your last campaign--------- */}
        <div className={styles.home2}>
          <h1>Outperform your last campaign</h1>
          <div>
            <div data-aos="fade-up" className={styles.home2_image}></div>
            <div className={styles.home2_data}>
              <h1>
                Sell more with email
                <br /> automations
              </h1>
              <p>
                Generate more orders with our prebuilt automations:
                <br /> remind abandoned cart shoppers, reengage lost
                <br /> customers, or cross-sell your products. Marketers have
                <br /> seen, on average, 4x more orders with our Customer
                <br /> Journey Builder than with bulk emails.
              </p>
              <br />
              <Button
                colorScheme="teal"
                variant="outline"
                borderRadius="none"
                width="200px"
                height="70px"
                marginRight="540px"
              >
                sell more
              </Button>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" className={styles.home2_image1}></div>
            <div className={styles.home2_data}>
              <h1>
                Win repeat business with
                <br /> predictive segmentation
              </h1>
              <p>
                Find and target your most valuable customers to help get
                <br /> them to buy again. Marketers have seen, on average, a
                <br />
                76% increase in revenue when using our Customer
                <br /> Lifetime Value and Likelihood to Purchase segments
                <br />
                compared to when they didn’t.
              </p>
              <br />
              <Button
                colorScheme="teal"
                variant="outline"
                borderRadius="none"
                width="200px"
                height="70px"
                marginRight="540px"
              >
                win repeate bussiness
              </Button>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" className={styles.home2_image2}></div>
            <div className={styles.home2_data}>
              <h1>
                Engage more customers with <br />
                stand-out emails
              </h1>
              <p>
                Improve your marketing results with suggestions based
                <br /> on what we know works best. We’ll help you create click-
                <br /> worthy content with our insights and drag-and-drop
                <br /> design tools.
              </p>
              <br />
              <Button
                colorScheme="teal"
                variant="outline"
                borderRadius="none"
                width="200px"
                height="70px"
                marginRight="540px"
              >
                engage more coustomer
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.home3}>
          <h1>Grow with Mailchimp</h1>
          <h3>
            Our marketing platform helps over 13 million businesses like these
            build their thing and keep it growing.
          </h3>
          <div className={styles.home3_1}>
            <div>
              <div className={styles.logo1}></div>
              <h1>Customers since 2011</h1>
            </div>
            <div>
              <div className={styles.logo2}></div>
              <h1>Customers since 2012</h1>
            </div>
            <div>
              <div className={styles.logo3}></div>
              <h1>Customers since 2010</h1>
            </div>
          </div>
        </div>
        {/* -------------Keep pushing forward.------------- */}
        <div className={styles.home4}>
          <h1>Keep pushing forward.</h1>
          <h1>We've got your back.</h1>
          <div>
            <div className={styles.forword1}>
              <div></div>
              <h1>Award-winning support</h1>

              <p>
                Get answers when you need them
                <br />
                from our team and marketing
                <br />
                resources.
              </p>

              <br />
              <a href="#">Learn more</a>
            </div>
            <div className={styles.forword2}>
              <div></div>
              <h1>300+ app integrations</h1>
              <p>
                Connect your favorite apps to
                <br />
                send more targeted campaigns.
              </p>
              <br />
              <a href="#">Learn more</a>
            </div>
            <div className={styles.forword3}>
              <div></div>
              <h1>Expert guidance</h1>
              <p>
                Get answers when you need them
                <br />
                from our team and marketing
                <br />
                resources.
              </p>
              <br />
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
        {/* -----------------------Do it all with Mailchimp----------- */}
        <div className={styles.home5}>
          <h1>Do it all with Mailchimp</h1>
          <p>
            Bring your audience data, marketing channels, and insights together
            so you can work
          </p>
          <p>on reaching your goals faster—all from a single platform.</p>
          <div className={styles.home5_1}>
            <div className={styles.home_1_animationimg}>
              <div>
                <h1>Get your business online</h1>
                <br />
                <p>
                  Give your brand a home with a custom domain. Then
                  <br />
                  launch a website to sell products or take appointments,
                  <br />
                  all with built-in marketing tools to help you boost sales
                  <br />
                  and find fans.
                </p>
                <br />
                <br />
                <br />
                <br />
                <Button
                  colorScheme="teal"
                  variant="outline"
                  borderRadius="none"
                  width="250px"
                  height="70px"
                  marginRight="540px"
                >
                  Website and Stores
                </Button>
              </div>
              <div data-aos="fade-up" className={styles.imageanimation}></div>
            </div>
            <div className={styles.home_1_animationimg1}>
              <div>
                <h1>Market your business</h1>
                <br />
                <p>
                  Send the right messages on all the right channels. Build
                  <br />
                  emails, social ads, landing pages, postcards, and more
                  <br />
                  from one place.
                </p>
                <br />
                <br />
                <br />
                <br />
                <Button
                  colorScheme="teal"
                  variant="outline"
                  borderRadius="none"
                  width="250px"
                  height="70px"
                  marginRight="540px"
                >
                  Website Campigns
                </Button>
              </div>
              <div data-aos="fade-up" className={styles.imageanimation1}></div>
            </div>
          </div>
        </div>
        {/* -------------------------disciption---------- */}
        <div className={styles.home6}>
          <div className={styles.home6_1}></div>
          <br />
          <br />
          <br />
          <div className={styles.home6_2}>
            <div className={styles.home6_2data}>
              <h1>
                ❝ Mailchimp allows us to
                <br />
                create content that is
                <br />
                timely and interesting
                <br />
                and has worldwide
                <br />
                appeal that can drive
                <br />
                our programming and
                <br />
                expand our audience.❞
              </h1>
            </div>
            <div data-aos="fade-up" className={styles.home6_image}></div>
          </div>
        </div>
        {/* -------------------Let’s do this---------------- */}
        <div className={styles.home7}>
            <br/>
          <h1>Let’s do this</h1>
          <p>Every big idea starts with a small step forward.</p>
          <br />
          <br />
          <Button data-aos="fade-up" colorScheme="teal" bg="#007c89" width="200px"height="70px" variant="solid">
            Pick A Plan
          </Button>
        </div>
        

      </div>
    </div>
  );
};

export default Home;
