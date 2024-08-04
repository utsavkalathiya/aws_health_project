import React from "react";
import { Button } from "./index";

const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 font-poppins">
        <h2 className="font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
          Let’s try our service now!
        </h2>
        <p
          className="font-normal max-w-[470px] mt-5"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Everything you need to grow your health
          anywhere on the planet.
        </p>
      </div>
      <div className="sm:mt-0 my-8">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
