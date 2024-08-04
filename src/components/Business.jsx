import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "./index";

const Feature = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row feature-card p-6 rounded-[20px] gap-10 ${
        index === features.length - 1 ? "mb-0" : "mb-6"
      }`}
    >
      <div
        className={`${styles.flexCenter} h-[64px] w-[64px] rounded-[100%] bg-dimBlue`}
        style={{ backgroundColor: "rgba(9, 151, 124, 0.1)" }}
      >
        <img
          src={icon}
          alt="image"
          className={`h-[50%] w-[50%] object-contain`}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="font-poppins font-semibold leading-5">{title}</h4>
        <p
          className="font-poppins font-normal text-dimWhite leading-1"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          return <Feature key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Business;
