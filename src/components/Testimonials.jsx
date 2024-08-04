import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import { FeedbackCard } from "./index";

const Testimonials = () => {
  return (
    <section id="clients" className="flex justify-center items-center flex-col" style={{marginTop: "10rem"}}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className="font-poppins font-normal text-[18px] leading-[30.8px]"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col lg:flex-nowrap justify-center flex-wrap">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
