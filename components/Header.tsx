"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <header className="  flex justify-between shadow-sm py-4 px-5 md:px-[120px] ">
        <div className="flex items-center gap-2 text-orange-600">
          <Image src={"/logo.svg"} alt="logotipo" width={120} height={120} />
        </div>

        {isOpen && (
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden font-bold">
            X
          </button>
        )}
        {!isOpen && (
          <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden transition-all">
            <FaBars />
          </button>
        )}

        <ul className={`flex gap-5 items-center lg:hidden teste`}>
          <li className="text-[18px]   hover:text-red-500 cursor-pointer">
            Home
          </li>
          <li className="text-[18px] hover:text-red-500 cursor-pointer">
            Sobre
          </li>
          <li className="text-[18px] hover:text-red-500 cursor-pointer">
            Contato
          </li>
        </ul>
      </header>
      {isOpen && (
        <div className="py-4 flex flex-col items-center gap-2 r-0 t-0 bg-slate-100 font-semibold responsive">
          <Link
            className="text-[18px] hover:text-red-500 cursor-pointer "
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[18px] hover:text-red-500 cursor-pointer"
            href="/"
          >
            Sobre
          </Link>
          <Link
            className="text-[18px] hover:text-red-500 cursor-pointer"
            href="/"
          >
            Contato
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;
