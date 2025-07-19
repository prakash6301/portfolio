import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { IntroSection } from "./IntroSection";
import { OverviewSection } from "./OverviewSection";
import ProblemSolutionSection from "./ProblemSolutionSection";
import UserFlowSection from "./UserFlowSection";
import ConclusionSection from "./ConclusionSection";
import ContactSection from "./ContactSection";
import StickyHireMeButton from "./StickyHireButton";



export default function RoomieCaseStudyPage() {
  return (


    <>
    <div className="px-2 sm:px-6 lg:px-8 w-full  mx-auto" >
     <Navbar/>

        <section className="min-h-screen bg-black text-white px-4 py-10 ">
       
        <TitleSection />
        <IntroSection/>
        <hr className="mt-10 border-t-2 border-white w-full font-semibold" />
        <OverviewSection/>
         <hr className="mt-10 border-t-2 border-white w-full font-semibold" />

         <ProblemSolutionSection/>
         <hr className="mt-10 border-t-2 border-white w-full font-semibold" />

         <UserFlowSection/>
         <hr className="mt-10 border-t-2 border-white w-full font-semibold" />


         <ConclusionSection/>
          <hr className="mt-10 border-t-2 border-white w-full font-semibold" /> 


         
    

      
    </section>
    <ContactSection/>
    
    <Footer/>


    </div>
    <StickyHireMeButton/>
    </>
    
    
    
  );
}
