import React from "react";

export default function HireMeButton() {
  return (
    <a
      href="mailto:youremail@example.com" // You can replace this with a link to a form or hiring page
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 rotate-180 origin-bottom-right"
      style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
    >
      <div className="bg-white text-black font-semibold px-3 py-2 shadow-md rounded-bl-lg hover:bg-black hover:text-white transition">
        <span className="block text-sm">SP</span>
        <span className="block text-sm">Hire Me</span>
      </div>
    </a>
  );
}
