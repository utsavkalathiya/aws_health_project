import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
        style={{ backgroundColor: "#00040f" }}
      >
        <div className={`${styles.flexStart} flex flex-row`}>
          <p className="text-gradient font-poppins font-medium mr-2">
            <span>Get</span>
          </p>
          <img src={arrowUp} className={`w-[23px] h-[23px] object-contain`} />
        </div>
        <div className={`${styles.flexStart} flex flex-row`}>
          <p className="text-gradient font-poppins font-medium">
            <span>Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
