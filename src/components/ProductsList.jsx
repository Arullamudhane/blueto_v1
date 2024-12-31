import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import gsap from "gsap";
import gift from "../images/gift.gif";
import ribbon from "../images/ribbon.png";
import { ArrowRight, Sparkles } from 'lucide-react';

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
    <div ref={component} className="min-h-screen bg-gradient-to-r from-gray-900/10 via-yellow-900/10 to-gray-900/10 p-4 sm:p-6 md:p-8 overflow-hidden">
   <ul
        className="grid border-y border-yellow-200/10 w-full max-w-6xl mx-auto"
        onMouseLeave={handleMouseLeave}
      >
        {products.map((product, index) => (
          <li
            key={product.id}
            ref={(el) => (itemsRef.current[index] = el)}
            className="list-item opacity-0 group"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className="flex flex-col justify-between border-t border-yellow-200/10 py-8 sm:py-10 md:py-12 text-yellow-200/90 lg:flex-row transition-all duration-500 hover:bg-gradient-to-r hover:from-yellow-200/5 hover:to-transparent rounded-xl px-4 sm:px-6 group-hover:translate-x-2">
              <div className="flex flex-col relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-lg blur opacity-0 group-hover:opacity-15 transition duration-1000"></div>
                <div className="relative">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 tracking-tight group-hover:tracking-wide transition-all duration-300">
                    {product.title}
                  </span>
                  <Sparkles className="absolute -top-6 -right-6 w-4 h-4 text-yellow-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 mt-4">
                  <div className="prose prose-lg prose-yellow mt-4 text-gray-300/90 w-full lg:w-[500px] xl:w-[600px] transition-transform duration-500 group-hover:translate-y-[-5px]">
                    <p className="text-base sm:text-lg leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {product.description || "Coming soon..."}
                    </p>
                  </div>
                  <div className="relative group/image w-full sm:w-[80%] lg:w-[400px] xl:w-[470px] mx-auto lg:mx-0 overflow-hidden rounded-xl bg-gradient-to-br from-yellow-200/10 to-transparent p-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-700 rounded-xl backdrop-blur-sm transform group-hover/image:translate-x-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-xl" />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-1"
                    />
                  </div>
                </div>
              </div>
              <span className="hidden lg:flex ml-auto items-center gap-2 text-xl font-medium mr-6 cursor-pointer group/arrow">
                <div className="relative overflow-hidden p-2 group-hover/arrow:rotate-12 transition-transform duration-300">
                  <ArrowRight className="transition-all duration-500 group-hover/arrow:translate-x-12 group-hover/arrow:opacity-0 group-hover/arrow:scale-75" />
                  <ArrowRight className="absolute inset-2 transition-all duration-500 -translate-x-12 opacity-0 group-hover/arrow:translate-x-0 group-hover/arrow:opacity-100" />
                </div>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div
        ref={revealRef}
        className="hover-reveal pointer-events-none fixed left-0 top-0 h-[320px] w-[200px] rounded-xl opacity-0 bg-cover bg-center transition-[background] duration-300 shadow-[0_0_25px_rgba(255,255,255,0.1)] ring-1 ring-yellow-200/20 backdrop-blur-sm hidden md:block"
        style={{
          backgroundImage:
            currentItem !== null ? `url(${products[currentItem].image})` : "",
        }}
      />
    </div>
  );
};

export default ProductsList;
