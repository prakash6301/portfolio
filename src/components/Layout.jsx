// src/components/Layout.jsx
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="px-2 sm:px-6 lg:px-8 w-full  mx-auto">
      {children}
    </div>
  );
};

export default Layout;
