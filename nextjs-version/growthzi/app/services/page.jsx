import ProductSection from "@/components/ProductSection";
import ServiceBanner from "@/components/ServiceBanner";
import React from "react";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ServiceBanner />
      <ProductSection />
    </main>
  );
};

export default Page;
