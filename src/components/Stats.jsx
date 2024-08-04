import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className="flex justify-center flex-wrap sm:mb-20 mb-6">
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className={`font-poppins flex-1 flex flex-row justify-start items-center m-3`}
          >
            <h4 className="font-semibold text-[30px] sm:text-[40px] leading-[43px] xs:leading-[53px]">
              {stat.value}
            </h4>
            <p className="font-normal text-[20px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
