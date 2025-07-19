import React, { useEffect, useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const ContactMeModal = ({ onClose }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50">
      <div
        ref={wrapperRef}
        className="bg-white shadow-xl text-black rounded-xl p-4 w-52 text-center space-y-2 relative"
      >
        {/* Close X Button */}

         <div className="relative mb-2">
  {/* Centered Title */}
  <div className="text-center font-semibold text-sm">Contact Me</div>

  {/* Close Button in Top-Right */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClose();
    }}
    className="absolute right-0 -top-2 text-gray-600 hover:text-black"
  >
    <IoClose className="text-xl" />
  </button>
</div>


     
        <div className="flex justify-around mt-2">
          {/* Email */}
          <a
            href="mailto:saiprakash6301@gmail.com"
            className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            title="Email"
          >
            <MdEmail className="text-xl" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919353077515"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-green-600 rounded-md text-white hover:bg-green-700 transition"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/saiprakashk6301"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
            title="LinkedIn"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMeModal;
