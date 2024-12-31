import React, { useEffect, useRef } from 'react';
import { Tilt } from 'react-tilt';
import gsap from 'gsap';
const ServiceCard = ({ title, component }) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline(); //{ duration: 2, x: 100, opacity: 0.5 }
      tl.to('.service-card', {
        x: 50,
        duration: 2,
        opacity: 0.5,
        delay: 0.5,
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });
    }, component);
    return () => ctx.revert();
  }, [component]);
  return (
    <Tilt className='xs:w-[250px] w-[250px]'>
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-md  service-card'>
        <div
          className='bg-[#021145] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly 
            items-center flex-col '
        >
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

export default ServiceCard;
