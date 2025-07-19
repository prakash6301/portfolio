import "./index.css";
import AppRoutes from "./components/AppRoutes";
import useLenisScroll from "./hooks/useLenisScroll";
import React from "react";


function App() {
  useLenisScroll(); // Initialize Lenis

  return (
    <>
    <AppRoutes />
    
    </>
    
  
);
}

export default App;

