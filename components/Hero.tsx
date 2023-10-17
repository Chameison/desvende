import { category } from "@/data/category";
import Image from "next/image";
import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

interface HeroProps {
  userInput: any;
}

function Hero({ userInput }: HeroProps) {
  const [searchInput, setSearchInput] = useState<string>();

  const handleCategoryClick = (category: string) => {
    setSearchInput(category);
  };

  return (
    <div className="text-center">
      <div>
        <Image
          src="/bg.png"
          alt="hero-bg"
          width={800}
          height={200}
          className="w-full  absolute mt-[-50px] "
        />
        <div className="mt-[70px] z-10">
          <h2 className="text-[55px] text-[#F43C29] tracking-widest font-bold ">
            ONDE VAI HOJE ?
          </h2>
          <h2 className="text-[20px]">Conheça lugares incriveis</h2>
          <div className="mt-5 z-10 flex gap-2 items-center justify-center">
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Pesquise qualquer lugar"
              className="z-10 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm outline-red-300"
            />
            <button
              onClick={() => userInput(searchInput)}
              className="bg-red-500 p-3 rounded-full text-slate-100 font-light shadow-md z-10 
            cursor-pointer hover:scale-105 transition-all"
            >
              <FaSearchLocation size={20} />
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-3 justify-center items-center">
            <h2>Ou procure por categoria</h2>
            <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3">
              {category.map((item, i) => (
                <button
                  key={i}
                  onClick={() => userInput(item.name)}
                  className="flex items-center justify-center border-[1px] 
                  w-[60px] p-4 bg-orange-50 rounded-full z-10 text-slate-500 
                   hover:text-red-400 hover:border-red-400 hover:scale-110 cursor-pointer transition-all "
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;