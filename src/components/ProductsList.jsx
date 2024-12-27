import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import gsap from "gsap";
import gift from "../images/gift.gif";
import ribbon from "../images/ribbon.png";

const ProductsList = ({ products }) => {
  const component = useRef(null);
  const revealRef = useRef(null);
  const itemsRef = useRef([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [currentItem, setCurrentItem] = useState(null);
  const [hovering, setHovering] = useState(false);
  // console.log(products[2].description.length);
  useEffect(() => {
    // Animate list-items in with a stagger
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => ctx.revert(); // cleanup!
    }, component);
  }, []);
  useEffect(() => {
    const handleMouseMove = (event) => {
      // console.log(event); mouse event to get position of the cursor
      const mousePos = { x: event.clientX, y: event.clientY + window.scrollY };

      // speed and direction
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));
      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;
          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1), // Apply rotation based on speed and direction
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert(); // cleanup!
      }, component);
    };
    // window.addEventListener('mousemove', handleMouseMove);
    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hovering, currentItem]);
  const productImages = products.map((product, index) => {
    const image = product.image;
    // console.log(image);
    return image;
  });
  const handleMouseEnter = (index) => {
    // console.log('On mouse enter', index);
    // setCurrentItem(index);
    // if (!hovering) setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };
  return (
    <div ref={component} className='min-h-screen'>
      <ul
        className='grid border-y border-y-slate-50/25'
        onMouseLeave={handleMouseLeave}
      >
        {products.map((product, index) => (
          <li
            key={index}
            className='list-item opacity-100 z-20 '
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className='flex flex-col justify-between -z-10 border-t border-t-slate-50/25 py-10  text-yellow-200 md:flex-row tracking-wide'>
              <div className='flex flex-col'>
                <span className='text-2xl font-bold text-shadow-[2px_2px_4px_#a09494]'>
                  {product.title}
                </span>
                <div className='flex flex-col md:flex-row gap-10 '>
                  <div className='prose prose-lg prose-stone mt-5 text-gray-200 w-full mx-auto  md:w-[600px]'>
                    <p>
                      {product.description.length > 0
                        ? product.description
                        : "We are excited as you are. We will launch this soon.."}
                    </p>
                    {product.title === "ReviewApplication" && (
                      <img className=' md:w-1/2' src={gift} alt='Example GIF' />
                    )}
                  </div>
                  <div className='flex relative justify-center items-center w-full md:w-[470px] border-[1px] border-[solid] border-[#5b5b5b] mx-auto'>
                    <img
                      src={product.image}
                      alt={product.title}
                      s
                      className='w-full  h-64 rounded-md'
                    />
                    {product.title === "ReviewApplication" && (
                      <img
                        className='absolute  w-[350px] md:w-[33vw] mx-auto'
                        src={ribbon}
                        alt='gift ribbon'
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* <span className='ml-auto flex items-center gap-2 text-xl  font-medium md:mr-10 cursor-pointer z-20'>
                <IoIosArrowDropright />
              </span> */}
            </div>
          </li>
        ))}
      </ul>
      <div
        className='hover-reveal pointer-events-none absolute  left-0 top-0  h-[320px] md:w-[200px] rounded-lg  z-10 opacity-100 bg-cover bg-center transition-[background] duration-300 ' //bg-cover bg-center
        style={{
          backgroundImage:
            currentItem !== null ? `url(${productImages[currentItem]})` : "",
        }}
        ref={revealRef}
      ></div>
    </div>
  );
};

export default ProductsList;
