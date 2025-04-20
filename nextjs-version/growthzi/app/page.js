import Cards from "@/components/Cards";
import CardSection from "@/components/CardSection";
import Hero from "@/components/Hero";
import OrderSection from "@/components/OrderSection";
import Origin from "@/components/Origin";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero/>
      <Origin/>
      <CardSection/>
      <OrderSection/>
    </main>
  );
}
