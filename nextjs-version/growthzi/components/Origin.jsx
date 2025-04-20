import Image from "next/image";
import React from "react";

const Origin = () => {
  return (
    <section className="w-full h-[36.563rem] bg-[#FFF8F2] pt-18 pl-16 pb-28 pr-9 flex items-center justify-between gap-8">
      <Image
        src={"/images/image2.png"}
        width={600}
        height={400}
        alt="Origin image"
      />
      <div className="flex flex-col gap-8 max-w-3xl ">
        <p className="font-semibold text-4xl">The Sweet Beginning</p>
        <p className="text-2xl">
          Lush Layers started with a simple love for baking at home. What began
          as small treats for friends and family quickly grew into a dream to
          share homemade happiness with more people.
          <br />
          We believe that every celebration deserves something special — a cake
          made with care, fresh ingredients, and a personal touch. From
          birthdays to little everyday joys, our cakes are baked to bring
          smiles.
          <br />
          At Lush Layers, we keep things simple, honest, and sweet — just like
          home.
          <br />
          Thank you for being part of our journey.
        </p>
      </div>
    </section>
  );
};

export default Origin;
