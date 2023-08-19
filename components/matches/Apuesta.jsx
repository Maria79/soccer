"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Apuesta = () => {
  const [tickedOne, setTickedOne] = useState(false);
  const [tickedX, setTickedX] = useState(false);
  const [tickedTwo, setTickedTwo] = useState(false);
  function handleClickOne() {
    setTickedOne(!tickedOne);
  }
  function handleClickX() {
    setTickedX(!tickedX);
  }
  function handleClickTwo() {
    setTickedTwo(!tickedTwo);
  }
  return (
    <div className="flex items-center pl-1">
      <p
        className=" relative w-[24px] border border-red-400 text-center cursor-pointer"
        onClick={handleClickOne}
      >
        {tickedOne ? (
          <AiOutlineClose
            className="absolute text-red-700 text-2xl font-extrabold"
            size={24}
          />
        ) : null}
        1
      </p>
      <p
        className=" relative w-[24px] border border-red-400 text-center cursor-pointer"
        onClick={handleClickX}
      >
        {tickedX ? (
          <AiOutlineClose
            className="absolute text-red-700 text-2xl font-extrabold"
            size={24}
          />
        ) : null}
        X
      </p>
      <p
        className=" relative w-[24px] border border-red-400 text-center cursor-pointer"
        onClick={handleClickTwo}
      >
        {tickedTwo ? (
          <AiOutlineClose
            className="absolute text-red-700 text-2xl font-extrabold"
            size={24}
          />
        ) : null}
        2
      </p>
    </div>
  );
};
