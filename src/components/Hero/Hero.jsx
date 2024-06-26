import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
          {/* left part og the hero section  */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
              >
                Discover <br /> the most suitable <br />
                property
              </motion.h1>
            </div>
            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Find a variety of properties
              </span>
              <span className="secondaryText">
                Forget all difficulties in finding your dream house{" "}
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search </button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColStart stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>

                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColStart stat">
                <span>
                  <CountUp start={1200} end={2000} duration={4} />
                  <span>+</span>
                </span>

                <span className="secondaryText">Happy Customers</span>
              </div>
              <div className="flexColStart stat">
                <span>
                  <CountUp end={22} />
                  <span>+</span>
                </span>

                <span className="secondaryText">Awards</span>
              </div>
            </div>
          </div>

          {/* right part of the hero section  */}
          <div className="flexCenter hero-right">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="image-container"
            >
              <img src="./hero-image2.jpg" alt="img" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
