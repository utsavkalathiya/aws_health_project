import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import { Button } from "./index";

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 ">
      <div className="flex flex-1 justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px]">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p
          className="font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles={`mt-10`} />
      </div>
      <div className="flex flex-1 justify-center items-center md:ml-10 ml-0 mt-10 relative">
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
