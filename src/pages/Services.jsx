import React, { useEffect, useRef } from "react";
import Bounded from "../components/Bounded";
import Heading from "../components/Heading";
import { Tilt } from "react-tilt";
import gsap from "gsap";

const ServiceCard = ({ title, component }) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline(); //{ duration: 2, x: 100, opacity: 0.5 }
      tl.to(".service-card", {
        x: 50,
        duration: 2,
        opacity: 0.5,
        delay: 0.5,
        stagger: {
          each: 0.5,
          from: "random",
        },
      });
    }, component);
    return () => ctx.revert();
  }, [component]);
  return (
    <Tilt className='xs:w-[250px] w-[250px]'>
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-md  service-card'>
        <div
          className='bg-slate-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly 
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
const Services = () => {
  const component = useRef(null);
  const services = [
    {
      title: "Custom Software Development",
    },
    {
      title: "Web Development",
    },
    {
      title: "Mobile App Development",
    },
    {
      title: "Cloud Computing Services",
    },

    {
      title: "Maintenance and Support",
    },
    {
      title: "Marketing",
    },
    {
      title: "Internet Of Things",
    },
    {
      title: "Patent and Copyrights",
    },
  ];

  return (
    <Bounded as='section'>
      <Heading size='xl' className='mb-8'>
        What we do!
      </Heading>
      <div className='prose prose-xl prose-invert mb-10'>
        <p>
          {" "}
          Central hub, innovation-focused we provide a diverse array of
          technological services.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-20  '>
        {services.map((services, index) => (
          <ServiceCard key={index} {...services} ref={component} />
        ))}
        <div className='ml-20 flex items-end justify-end prose prose-xl prose-stone z-20'></div>
      </div>
    </Bounded>
  );
};

export default Services;
