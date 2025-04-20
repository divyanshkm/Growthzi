import React from "react";
import Cards from "./Cards";

const CardSection = () => {
  return (
    <section className="w-full h-auto bg-[#FFF8F2]">
      <div className="flex items-start gap-12 justify-center">
        <Cards
          heading={"Homemade with Heart"}
          para={
            "Each Each cake is crafted with care, just like you would at home — no shortcuts, only love."
          }
        />
        <Cards
          heading={"Our Values"}
          para={"At Lush Layers, our values are baked into everything we do."}
        />
        <Cards
          heading={"Quality Ingredients"}
          para={
            "We use fresh, real ingredients you can trust. No unnecessary additives, just pure flavor."
          }
        />
      </div>
      <div className="flex items-center justify-center mt-36 mb-31">
        <p className="font-medium text-2xl text-center max-w-3xl mt-10 mb-10">
          The Cake from Lush Layers made our wedding day even more special. The
          attention to detail and taste were absolutely perfect. Everyone
          couldn’t stop talking about!
        </p>
      </div>
    </section>
  );
};

export default CardSection;
