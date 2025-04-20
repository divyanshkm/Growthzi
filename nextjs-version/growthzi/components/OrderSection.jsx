import React from "react";

const OrderSection = () => {
  return (
    <section className="w-full h-auto bg-linear-to-r from-[#E9B0B4] to-[#E39F85] flex flex-col items-center justify-center py-19 ">
      <p className="font-bold text-3xl text-[#FFFAFA]">
        Ready to Create Your Sweet Moments?
      </p>
      <button className="mt-5 bg-[#FFFAFA] text-[#E4A18C] font-bold text-2xl py-4 px-7 rounded-full hover:bg-[#fbae90] hover:text-[#FFFAFA] transition duration-300 ease-in-out hover:cursor-pointer">
        Order Now
      </button>
    </section>
  );
};

export default OrderSection;
