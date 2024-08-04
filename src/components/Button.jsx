import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-3 px-6 bg-blue-gradient text-poppins font-medium text-[18px] text-primary outline-none rounded-[2px] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
