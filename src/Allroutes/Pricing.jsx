import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import MarkatingPlatform from "./MarkatingPlatform";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.Pricingmain}>
      <div className={styles.p1}>

      </div>
      
      <Tabs isFitted variant="enclosed" style={{border:"1px solid black",height:"auto"}}>
        <TabList mb="1em" style={{height:"70px",backgroundColor:"#ffec76"}} _hover={{backgroundColor:"white"}}>

          <Tab>Markating Platform</Tab>
          <Tab>Website & Commerce</Tab>
          <Tab>Tranction Email</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MarkatingPlatform/>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Pricing;
