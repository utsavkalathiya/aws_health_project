import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between items-center flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p
        className="font-poppins font-medium text-[18px] leading-[32.4px] my-10 "
        style={{ color: "rgba(255, 255, 255, 0.7)" }}
      >
        {content}
      </p>

      <div className="flex flex-row  items-center gap-3 font-poppins">
        <img src={img} className="w-[48px] h-[48px] rounded-full" />
        <div>
          <h4 className="font-semibold text-[20px] leading-[30px]">{name}</h4>
          <p
            className="font-normal text-[18px] leading-[32px]"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
