import { Routes, Route } from "react-router-dom";
import CaseStudyPage from "./CaseStudyPage";
import HomePage from "./HomePage";


export default function AppRoutes() {
 
  return (
    <Routes>
       <Route path="/" element={<HomePage />} />
      <Route path="/case-study/roomie" element={
     
        <CaseStudyPage />
      
       } />
    </Routes>
  );
}
