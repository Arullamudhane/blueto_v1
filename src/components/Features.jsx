import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animation";
import "./Features.css";

import { useEffect } from "react";
import gsap from "gsap";
import { dots } from "../assets";
import AnimatedCounter from "./AnimatedCounter";
import SwingImage from "../pages/SwingImage";
import AgileCard from "./AgileCard";
import Button from "./Button";

const Features = () => {
  let agileCards = [
    {
      color: "bg-indigo-500",
      title: "Connect with us",
      subTitle: "Welcome abord",
    },
    {
      color: "bg-pink-700",
      title: "BrainStorm Your Idea",
      subTitle: "Lets do a research",
    },
    {
      color: "bg-orange-600",
      title: "Get Your team",
      subTitle: "Welcome CEO",
    },
    {
      color: "bg-lime-700",
      title: "Create Product",
      subTitle: "Great!",
    },
  ];
  useGSAP(() => {
    animateWithGsap(
      ".g_box",
      // { rotation: 360, x: 1, duration: 1,  }
      { y: 0, scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
    // animateWithGsap(".g_box", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "bounce.out",
    //   duration: 1,
    // });
    // animateWithGsap(".g_line", {
    //   y: 0,
    //   opacity: 1,
    //   ease: "power2.inOut",
    //   duration: 1,
    // });
  }, []);

  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class when the element is visible
            element.classList.add("animate-lineGrow");
            // Stop observing after animation starts
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold as needed

    if (element) {
      observer.observe(element);
    }

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className='h-full  bg-zinc relative overflow-hidden '>
        <div className=' g_line w-1  h-80 bg-gradient-to-b from-zinc-500 mt-5 absolute right-0  rounded-full translate-y-28' />

        <div className='screen-max-wdith '>
          <div className='mb-12 w-full'>
            <h1
              id='features_title'
              className='text-zinc-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0  font-medium opacity-0 translate-y-20'
            >
              Explore the full story.
            </h1>
          </div>
          <div className='feature-text-container'>
            <div className='flex-1 '>
              <p className='feature-text g_text'>
                <p className='text-gradient my-4 text-[1.7rem] font-semibold'>
                  Own Your Vision, Command the Process
                </p>
                From day one, you’re not just involved—you’re in charge. Your
                ideas are your greatest asset, and we provide the secure
                environment and expert team to bring them to life without
                compromise. You lead, we execute.
              </p>
              <p className='feature-text g_text'>
                <p className='text-gradient my-4 text-[1.7rem] font-semibold'>
                  Real-Time Updates, Full Transparency
                </p>
                Experience the thrill of running your own project with daily
                updates and transparent communication. Our team is at your
                disposal for advice and collaboration, ensuring that your vision
                is realized exactly as you envision it.
              </p>
              <p className='feature-text g_text'>
                <p className='text-gradient my-4 text-[1.7rem] font-semibold'>
                  Lead Like a CEO
                </p>
                Step into the role of a CEO—visit our team, drive the
                development process, and watch your product take shape under
                your leadership. This isn’t just a service; it’s a partnership
                where your decisions define the outcome.
              </p>
              <p className='feature-text g_text'>
                <p className='text-gradient my-4 text-[1.7rem] font-semibold'>
                  Why Choose Blueto? Expertise:{" "}
                </p>
                Our team comprises skilled professionals with in-depth knowledge
                of the latest technologies. Custom Solutions: We understand that
                every business is unique. Our solutions are tailor-made to fit
                your specific requirements. Quality Assurance: Our commitment to
                delivering high-quality software ensures that your project meets
                the highest standards.{" "}
                <span className='text-white '>
                  <b>
                    <br />
                    ALL THE PROJECTS WILL BE KEPT AS SECRETS.
                  </b>
                </span>{" "}
              </p>
              {/* <div className=' md:flex flex-row items-center justify-around hidden mt-20'>
                <div className='g_box   hidden md:flex w-36 h-40 md:w-64 md:h-64 border-2  items-center justify-center rounded-2xl '>
                  <p className='text-center p-4 text-zinc-400 '>
                    <p className='italic text-slate-300 text-lg '>
                      Your Vision, Your Secret Your ideas
                    </p>{" "}
                    remain strictly confidential with us. We guarantee that your
                    intellectual property stays protected, so you can innovate
                    with peace of mind
                  </p>
                </div>
                <div className='g_box  hidden md:flex w-36 h-40 md:w-64 md:h-64 border-2  items-center justify-center rounded-2xl'>
                  <p className='text-center p-4 text-zinc-400 '>
                    <p className='italic text-slate-300 text-lg '>
                      Your Vision, Your Secret Your ideas
                    </p>{" "}
                    remain strictly confidential with us. We guarantee that your
                    intellectual property stays protected, so you can innovate
                    with peace of mind
                  </p>
                </div>
              </div> */}

              {/* <div className='absolute   md:-bottom-[19rem] md:-right-[35rem]'>
              <img src={dots} alt='addon' />
            </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* yyyyyyy  project counts and agile methodologies*/}
      <div className='ml-0 grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-10 px-0  lg:px-20  '>
        {/* Agile-------- */}

        <div
          className='relative flex  flex-col justify-between   items-center border-2
         border-zinc-800/50 rounded-2xl shadow-inner p-2 md:p-10'
        >
          <div className='absolute inset-0 flex justify-center  mr-[16.5rem] md:mr-[19rem] lg:mr-[19rem]  '>
            <div
              ref={counterRef}
              className=' w-0.5 bg-gradient-to-b from-transparent via-pink-300 to-green '
            ></div>
          </div>
          {agileCards.map((items, index) => (
            <AgileCard items={items} />
          ))}
        </div>
        {/* Counter ------------ */}
        <div className=' grid grid-rows-2 gap-y-10 items-center justify-center'>
          <AnimatedCounter />
          <SwingImage />
        </div>
      </div>
      {/* countr */}
    </>
  );
};

export default Features;
