import React, { useState, useEffect, useRef } from "react";
import "./Counter.css"; // Import the CSS file for styling and animation

const AnimatedCounter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 10;
            const end = 75;
            const duration = 2000; // Duration of animation in milliseconds
            const stepTime = 50; // Time between steps in milliseconds
            const steps = duration / stepTime;

            const step = () => {
              if (start < end) {
                start += end / steps;
                setCount(Math.round(start));
                setTimeout(step, stepTime);
              } else {
                setCount(end);
              }
            };

            step();
            // Stop observing after animation starts
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold as needed

    observer.observe(element);

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className=' flex flex-col items-center justify-center  border-2 border-zinc-800/50 rounded-2xl shadow-inner w-[21rem] h-60  xl:w-[28rem] xl:h-[20rem]'>
      <h3
        ref={counterRef}
        className=' text-center text-7xl font-bold text-blue-100 mb-10'
      >
        {count}+
      </h3>

      <span ref={counterRef} className=' text-xl text-blue-100'>
        Completed End-to-End Projects
      </span>
    </div>
  );
};

export default AnimatedCounter;
