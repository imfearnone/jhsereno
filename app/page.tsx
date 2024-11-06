import About from "@/components/About";
import BuyingProcess from "@/components/BuyingProcess";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Market from "@/components/Market";
import MarketingPlan from "@/components/MarketingPlan";
import OurBenifit from "@/components/OurBenifit";
import OurPartners from "@/components/OurPartners";
import OurService from "@/components/OurService";
import SellingProcess from "@/components/SellingProcess";
import WorkWithUs from "@/components/WorkWithUs";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex w-full">
        <Hero />
      </div>

      <div className="flex justify-center bg-white mt-20 md:mt-32">
        <MarketingPlan />
      </div>

      <div className="flex justify-center bg-sectionColor pt-20 md:pt-20">
        <OurService />
      </div>

      <div className="flex justify-center bg-white pt-20 md:pt-32">
        <SellingProcess />
      </div>

      <div className="flex justify-center bg-white pt-20 md:pt-32">
        <BuyingProcess />
      </div>

      <div className="flex justify-center bg-sectionColor pt-20 md:pt-20">
        <OurBenifit />
      </div>

      <div className="flex justify-center bg-white pt-20 md:pt-32">
        <Market />
      </div>

      <div className="flex justify-center bg-sectionColor pt-20 md:pt-20">
        <OurPartners />
      </div>

      <div className="flex justify-center">
        <WorkWithUs />
      </div>

      <div className="flex justify-center bg-white pt-20 md:pt-32">
        <About />
      </div>

      <div className="flex justify-center bg-black pt-20 md:pt-20">
        <Footer />
      </div>
    
    </main>
  );
}
