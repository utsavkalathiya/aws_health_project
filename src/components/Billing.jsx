import React from "react";
import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section
      id="product"
      className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}
    >
      <div
        className={`flex flex-1 justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative`}
      >
        <img
          src={bill}
          alt="billing"
          className="z-[5] w-[100%] h-[100%] relative"
        />

        <div className="absolute white__gradient z-[3] top-0 w-[50%] h-[50%] rounded-full" />
        <div className="absolute pink__gradient z-[0] bottom-0 w-[50px] h-[50%] rounded-full" />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[7608px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p
          className="font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px]"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row mt-5 gap-4">
          <img
            src={apple}
            alt="apple_store"
            className="cursor-pointer object-contain h-[42.05px] w-[128.86px]"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
