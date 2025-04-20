import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[31rem] flex  justify-center ">
      <div className="absolute w-full h-[31rem] mb-0 z-[1] overflow-hidden p-0">
        <Image
          src={"/images/cake.png"}
          fill
          className="object-cover object-center"
          alt="Hero Banner"
        />
      </div>
      <div className="flex  justify-end flex-col w-full ml-16 mb-[4.5rem] z-10">
        <p className="font-million-dreams text-5xl text-[#531212] ">
          Baked with Love.
          <br />
          Layered with Memories.
        </p>
      </div>
    </section>
  );
};

export default Hero;
