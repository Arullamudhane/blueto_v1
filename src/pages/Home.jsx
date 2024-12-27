import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bounded from "../components/Bounded";
import Shapes from "../components/Shapes";
import HomeAbout from "../components/HomeAbout";
import Features from "../components/Features";
import { addon1 } from "../assets";
import BGAnimation from "./BGAnimation";
import BounceButton from "./BounceButton";
import FlipCard from "./FlipCard";
import SwingImage from "./SwingImage";
import Button from "../components/Button";
import ContactHomePage from "../components/ContactHomePage";
const Home = () => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );
      tl.fromTo(
        ".work",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,

          scale: 1,
          ease: "elastic.out(1,0.3)",
        },
        "<1"
      );
    }, component);
    return () => ctx.revert();
  }, []);
  const renderLetters = (name, key) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded ref={component} className='md:py-0 lg:py-0  '>
      <div
        className=' max-h-screen  md:max-h-[90vh]    grid  grid-cols-1 md:grid-cols-2 
         items-center 
       md:-mt-36 md:mb-0  relative  '
      >
        <Shapes />

        <div className=' col-start-1 md:row-start-1 -mt-10 md:mt-0 '>
          <h1
            className='mb-8  text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none mt-0 '
            aria-label={"blueto-tech"}
          >
            <span className='block text-slate-300 '>
              {renderLetters("Blueto", "first")}
            </span>
            <span className='-mt-[.2em] block  text-slate-500  '>
              {renderLetters("Tech.", "last")}
            </span>
          </h1>
          <div className=' mb-5'>
            <span
              className='work 
          bg-gradient-to-tr from-yellow-700 via-yellow-200 to-yellow-700
           bg-clip-text text-xl font-semibold   text-transparent opacity-0 '
            >
              crafting a world where <b>exceptional services</b> adorns every
              smile
            </span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center  '>
        <BounceButton />
      </div>
      <div className=''>
        <div className='w-full h-0.5 bg-slate-500/50 '></div>
        {/* -left-[20rem] bottom-[10rem] md:-left-[60rem] md:bottom-[35rem] */}

        <div className='absolute -left-[20rem] bottom-[10rem] md:-left-[62rem] md:bottom-[30rem] '>
          <img src={addon1} alt='addon' className='' />
        </div>

        <HomeAbout />
        <Features />

        <ContactHomePage />
      </div>
    </Bounded>
  );
};

export default Home;
