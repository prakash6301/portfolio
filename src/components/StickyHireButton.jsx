import React, { useEffect, useState } from 'react';
import ContactMeModal from './ContactMeModal';

const StickyHireMeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      // Reset to false after user stops scrolling for 200ms
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      onClick={() => setShowModal((prev) => !prev)}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer"
    >
      <div
        className={`w-10 h-32 flex flex-col items-center justify-between shadow-lg cursor-pointer transition-all duration-300 p-2 hover:text-white ${
          isScrolling ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white text-black hover:bg-orange-500'
        }`}
      >
        {/* Top: SP initials */}
        <span className="text-lg font-bold">SP.</span>

        {/* Bottom: Vertical Hire Me text */}
        <span className="text-sm font-semibold rotate-180 [writing-mode:vertical-rl] mb-2">
          Hire Me
        </span>
      </div>

      {showModal && <ContactMeModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default StickyHireMeButton;
