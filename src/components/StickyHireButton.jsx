import React, { useEffect, useRef, useState } from 'react';
import ContactMeModal from './ContactMeModal';

const StickyHireMeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      onClick={() => setShowModal((prev) => !prev)}
      className="fixed right-0 md:top-[40vh] lg:top-[40vh] top-[40vh] z-50 cursor-pointer will-change-transform"
    >
      <div
        className={`w-10 h-32 flex flex-col items-center justify-between shadow-lg transition-all duration-300 p-2 hover:text-white ${
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
