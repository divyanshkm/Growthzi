import React from "react";

const Cards = ({ heading, para }) => {
  return (
    <div className="w-[25.313rem] h-60 bg-[#FDEBE7] rounded-4xl flex flex-col justify-center items-center gap-5">
      <h3 className="font-bold text-2xl px-5">{heading}</h3>
      <p className="text-base text-center text-pretty px-5">{para}</p>
    </div>
  );
};

export default Cards;
