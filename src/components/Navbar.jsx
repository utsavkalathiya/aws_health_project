import React, { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            {/* <img src={logo} alt="hoobank" className="w-[124px] h-[50px]" /> */}
            <h3 style={{fontSize : "1.7rem", fontWeight: "bold"}}>Healthy Life Care</h3>
            <ul className="sm:flex hidden gap-4">
                {navLinks.map((nav, index) => (
                    <li key={index}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden">
                <img
                    src={toggleMenu ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggleMenu((prev) => !prev)}
                />

                <div className={`${toggleMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute right-0 mx-4 my-2 min-w-[140px] sidebar rounded-xl`}>
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((nav, index) => (
                            <li key={index} className='font-poppins font-normal text-[16px]'>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
