import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HireMeButton() {
  const circleRef = useRef(null);
   const arrowContainerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const lastScrollTop = useRef(0);
  const requestRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollSpeed = scrollTop - lastScrollTop.current;
      lastScrollTop.current = scrollTop;

      setRotation((prev) => prev + scrollSpeed * 0.5);
    };

    const animate = () => {
      if (circleRef.current && arrowContainerRef.current) {
        circleRef.current.style.transform = `rotate(${rotation}deg)`;
        arrowContainerRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, [rotation]);

  const text = " HIRE ME • HIRE ME • ";
  const repeatedText = text.repeat(10).trim();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative w-32 h-32 rounded-full bg-black border-2 border-white flex items-center justify-center">
        <div
          ref={circleRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.1s linear" }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              ></path>
            </defs>
            <text
              fill="white"
              fontSize="14"
              fontWeight="semibold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <textPath xlinkHref="#circlePath">{repeatedText}</textPath>
            </text>
          </svg>
        </div  >
        <div
        ref={arrowContainerRef}
        className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full  bg-black border-2 border-white "
      >
        <FaArrowRight className="text-white text-2xl" />
      </div>
      </div>
    </div>
  );
}
