"use client";
import React, { useState } from "react";
// import { MdOutlineAddLocationAlt } from "react-icons/md";
import {} from "react-icons";
import Image from "next/image";
// import { FaBars } from "react-icons/fa";
function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <header className="  flex justify-between shadow-sm py-4 px-5 md:px-[120px] ">
      <div className="flex items-center gap-2 text-orange-600">
        <Image src={"/logo.svg"} alt="logotipo" width={150} height={150} />
      </div>
      {/* {menuOpen && (
        <button onClick={toggleMenu}>
          <FaBars />
        </button>
      )} */}

      <ul
        className={`flex gap-5 items-center  `}
      >
        <li className="text-[18px] md:text-[10px] hover:text-red-500 cursor-pointer">Home</li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">Sobre</li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">
          Contato
        </li>
      </ul>
    </header>
  );
}

export default Header;
