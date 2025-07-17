// src/components/Typography.jsx
import React from "react";
import { typographyVariants } from "../constants/typographyVariants";

const Typography = ({ as = "p", type = "body", className = "", children }) => {
  const Tag = as;
  const baseStyle = typographyVariants[type] || typographyVariants.body;

  return <Tag className={`${baseStyle} font-inter ${className}`}>{children}</Tag>;
};

export default Typography;
