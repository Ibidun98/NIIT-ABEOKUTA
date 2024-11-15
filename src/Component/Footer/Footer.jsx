import React from 'react'
import classes from "./Footer.module.css";
import Logo from "../../Assests/NIIT Logo.png";
import Logo2 from "../../Assests/IT CORE LOGO.png";
import Facebook from "../../Assests/Facebook.png";
import Instagram from "../../Assests/Instagram.png";
import Twitter from "../../Assests/Twitter.png";
import Youtube from "../../Assests/Youtube.png";
import Linkedin from "../../Assests/Linkedin.png";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer>
        <hr />
        <div className={classes.footWrap}>
          <div className={classes.footLeft}>
          <div className={classes.footLogo}>
            <Link to="/">
            <img src={Logo} alt="Logo" />
            <img src={Logo2} alt="Logo" />
            </Link>
            </div>
            <p>NIIT Agbara, Suite E, Agbara Estate shopping Mall, Beside Stanbic IBTC Beach Town, Agbara.</p>
            <p> <TiLocation />Beach Town, Agbara</p>
            <p> <IoCall />08094355000, 08094355003</p>
            <p>www.niitagbara.com</p>
            <div className={classes.socials}>
              <div className={classes.media}>
                <img src={Facebook} alt="Facebook" />
              </div>

              <div className={classes.media}>
                <img src={Instagram} alt="Instagram" />
              </div>

              <div className={classes.media}>
                <img src={Twitter} alt="Twitter" />
              </div>

              <div className={classes.media}>
                <img src={Youtube} alt="Youtube" />
              </div>

              <div className={classes.media}>
                <img src={Linkedin} alt="Linkedin" />
              </div>
            </div>
          </div>
          <div className={classes.footRight} >
            <div className={classes.info} >
              <h5>Menu</h5>
              <p>Home</p>
              <p>Courses</p>
              <p>Blog</p>
              <p>About us</p>
              <p>Contact us</p>
              <p>Terms & Policy</p>
            </div>

            <div className={classes.info} >
              <h5>Account</h5>
              <p>My Account</p>
              <p>Checkout</p>
              <p>My Cart</p>
              <p>My catalog</p>
            </div>

            <div className={classes.info} >
              <h5>Stay Connected</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
              <p>Linkedin</p>
            </div>
          </div>

          <div className={classes.subscribe}>
            <h5>Stay Updated</h5>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit"><PiPaperPlaneTiltFill /></button>
            </form>
          </div>
          </div>
          <div className={ classes.copyright}>
            <hr/>
            <p>Copyright © NIIT 2021 All rights reserved | Designed by Noel Amobeda</p>
          </div>
      </footer>
    </div>
  )
}

export default Footer