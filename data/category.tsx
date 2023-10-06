import { BiRestaurant, BiGasPump } from "react-icons/bi";
import { MdLocalGroceryStore } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import { LuBeer } from "react-icons/lu";
import { AiFillBank } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";

interface CategoryItem {
  id: number;
  name: string;
  icon: any;
}

import React from "react";

export const category: CategoryItem[] = [
  {
    id: 1,
    name: "Restaurantes",
    icon: <BiRestaurant size={30} />,
  },
  {
    id: 2,
    name: "Postos de gasolina",
    icon: <BiGasPump size={30} />,
  },
  {
    id: 3,
    name: "Mercados",
    icon: <MdLocalGroceryStore size={30} />,
  },
  {
    id: 4,
    name: "Cafeteria / Padaria",
    icon: <GiCoffeeCup size={30}  />,
  },
  {
    id: 5,
    name: "Bares",
    icon: <LuBeer size={30} />,
  },
  {
    id: 6,
    name: "Bancos",
    icon: <AiFillBank size={30} />,
  },
  {
    id: 7,
    name: "Outros",
    icon: <CiCircleMore size={30} />,
  },
];

