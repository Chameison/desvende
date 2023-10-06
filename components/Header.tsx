import React from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import {} from "react-icons";
function Header() {
  return (
    <header className=" flex justify-between shadow-sm py-4 px-5">
      <div className="flex items-center gap-2 text-orange-600">
        <MdOutlineAddLocationAlt size={35} clas/>
        <span className="text-[25px] font-semibold tracking-widest text-orange-600">
          DESVENDE
        </span>
      </div>
      <ul className="flex gap-5 items-center">
        <li className="text-[18px] hover:text-red-500 cursor-pointer">Home</li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">Sobre</li>
        <li className="text-[18px] hover:text-red-500 cursor-pointer">
          Contato
        </li>
      </ul>
    </header>
  );
}

export default Header;
