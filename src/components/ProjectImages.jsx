import roomhomepage from "../assets/Roomihome.png"; 
import roomatepage from "../assets/roomate.png"; 
import roompage from "../assets/roompage.png"; 
import roomlisting from "../assets/listing.png"; 
import listing from "../assets/roomListing.png"; 
import setting from "../assets/setting.png"; 
import verification from "../assets/verification.png"; 
import { motion } from "framer-motion"; 
import { useEffect, useRef } from "react"; 

export default function ProjectImages() {
  const images = [
    roomhomepage,
    roomlisting,
    roompage,
    roomatepage,
    listing,
    setting,
    verification,
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;

    const scrollImages = () => {
      if (container) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollImages);
    };

    animationFrame = requestAnimationFrame(scrollImages);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <motion.div 
      className="mt-20 overflow-hidden" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <div 
        ref={containerRef} 
        className="flex flex-row gap-4 overflow-x-hidden overflow-y-hidden no-scrollbar"
      >
        {[...images, ...images, ...images].map((img, index) => (
          <motion.div 
            key={index} 
            className="shrink-0 flex justify-center items-center rounded-2xl" 
            whileHover={{ scale: 1.05 }} 
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }} 
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <img 
              src={img} 
              alt={`Mockup ${index + 1}`} 
              className="w-[250px] h-[500px] md:w-[390px] md:h-[800px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
