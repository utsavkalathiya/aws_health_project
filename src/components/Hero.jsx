import React from "react";
import styles from "../style";
import { discount, robot, homeImage } from "../assets";
import { GetStarted } from "./index";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-[75%]">
          <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] ss:leading-[100.8px] leading-[75px]">
          Wellness is a  <br className="sm:block hidden" />
            <span className="text-gradient">Journey,</span> <br />
          </h1>

          <div className="sm:flex hidden">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Not a Destination
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Our team is committed to supporting your healthy lifestyle by providing expert guidance and encouragement. Together, we'll achieve your health goals and foster a balanced and vibrant life.
        </p>
      </div>

      <div
        className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={homeImage}
          alt="billing"
          className="w-full h-full relative z-[5] p-10"
        />

        <div className="absolute z-[0] w-[40%] h-[38%] pink__gradient top-0" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-4" />
        <div className="absolute z-[2] w-[50%] h-[50%] bottom-20 blue__gradient" />
      </div>

      <div className={`sm:hidden ${styles.flexCenter} my-10`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
