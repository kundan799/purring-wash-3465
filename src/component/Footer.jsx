import React from "react";
import styles from "./footer.module.css";
import Footer1 from "./Footer1";

import { Img, Select } from "@chakra-ui/react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
  return (
    <div className={styles.footermain}>
      <div className={styles.Footer1}>
        <h1>Related Links:</h1>
        <a href="#">How To Make a Website: A Guide for Building Your Website</a>
        <a href="#">How To Start an E‑Commerce Business—a Complete Guide</a>
        <a href="#">How To Sell to Any Audience</a>
      </div>
      <Footer1 />
      <br />
      <br />
      <br />
      <div className={styles.Footer3}>
        <div className={styles.socialmedia}>
          <Img
            width="100px"
            height="50px"
            src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80"
          />
          <Img
            width="100px"
            height="50px"
            src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80"
          />
          <AiFillFacebook size="40px" />
          <BsTwitter size="40px" />
          <BsInstagram size="40px" />
          <AiFillLinkedin size="40px" />
          <GrYoutube size="40px" />
        </div>
        <div className={styles.option}>
          <Select width="200px" style={{border:"1px solid black"}}>
            <option value="option1">English</option>
            <option value="option2">Espanol</option>
            <option value="option3">Fraincais</option>
            <option value="option3">portugeus</option>
            <option value="option3">Deutsch</option>
            <option value="option3">italiano</option>
          </Select>
          <br/>

          <p>
            ©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark
            of The Rocket Science Group. Apple and the Apple logo are trademarks
            of Apple Inc. Mac App Store is a service mark of Apple Inc. Google
            Play and the Google Play logo are trademarks of Google Inc. Privacy
            | Terms | Cookie Preferences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
