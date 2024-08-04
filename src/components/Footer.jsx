import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="flex justify-center items-center sm:py-16 py-6 font-poppins flex-col">
      <div className="md:flex-row flex-col w-full mb-8">
        {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        /> */}
        <h3 style={{fontSize : "2rem", fontWeight: "bold"}}>Healthy Life Care</h3>
        <p
          className="font-normal max-w-[310px] mt-6 leading-[23px]"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          A new way to make our life easy, healthy and secure.
        </p>
      </div>

      <div
        className="
      flex
      flex-[1.5] 
      flex-row
      justify-between
      flex-wrap
      w-full
      mb-[40px]"
      >
        {footerLinks.map((footerLink) => {
          return (
            <div key={footerLink.title} className="mx-[10px]">
              <h4 className="font-poppins font-semibold md:text-[32px] text-[24px] leading-[50px] md:my-0 my-[20px]">
                {footerLink.title}
              </h4>

              <ul>
                {footerLink.links.map((link, index) => {
                  return (
                    <li
                      key={link.name}
                      className="leading-9 cursor-pointer hover:text-secondary"
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      onMouseEnter={() =>
                        (this.style.backgroundColor = "#00F6FF")
                      }
                    >
                      {link.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between pt-10 font-poppins border-t-[1px] w-full">
        <p
          className="font-semibold"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Copyright Ⓒ {new Date().getFullYear()} HooBank. All Rights Reserved.
        </p>
        <div className="flex gap-5 md:mt-0 mt-7">
          {socialMedia.map((social, index) => {
            return (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="cursor-pointer object-contain"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
