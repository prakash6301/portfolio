import ContactSection from "./ContactSection.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Layout from "./Layout.jsx";
import HeroSection from "./HeroSection.jsx";
import ProjectsSection from "./ProjectSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import EducationSection from "./EducationSection.jsx";
import StickyHireMeButton from "./StickyHireButton.jsx";


export default function HomePage() {
  return (


    <>

     <div className="overflow-hidden" >
      <Layout>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
         <SkillsSection />
        <ExperienceSection />
       
        <EducationSection />
        <ContactSection />
        <Footer />
      </Layout>
      
    </div>

    <StickyHireMeButton/>
    </>
   
  );
}
