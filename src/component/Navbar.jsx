import { Button, Img } from "@chakra-ui/react";
import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.navmain}>
      <div className={styles.section1}>
        
        <NavLink  to="/pricing">Products</NavLink>
        <NavLink to="/resoureces">Resources</NavLink>
        <NavLink to="/inspirtion">Inspiration</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
      </div>
      <div className={styles.section2logo} onClick={()=>navigate("/")}>
      
      </div>
      <div className={styles.section3button}>
        <div>
          <span>Sales:</span>
          <br />
          <span>+1 (800) 315-5939</span>
        </div>
        <div>
          <GiEarthAsiaOceania size={"30px"} />
        </div>
        <div>
          <FiSearch size={"30px"} />
        </div>
        <div>
          <Button colorScheme="teal"  size='lg' variant="outline" borderRadius="none" onClick={()=>navigate("/login")}>
            Log In
          </Button>
        </div>
        <div>
          <Button colorScheme="teal" variant="solid" size='lg' borderRadius="none" onClick={()=>navigate("/signup")}>
            Sign Up free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
