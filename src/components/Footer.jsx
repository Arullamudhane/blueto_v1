import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import Bounded from "./Bounded";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const links = [
    {
      to: "/company",
      link: "company",
    },
    {
      to: "/products",
      link: "products",
    },
    {
      to: "/services",
      link: "services",
    },
  ];
  return (
    <Bounded as='footer' className='text-slate-600'>
      <div className='container mx-auto mt-2 md:mt-4 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row '>
        <div className='name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start'>
          <NavLink
            to='/'
            className='text-xl font-extrabold  text-slate-100 transition-colors duration-150 hover:text-pink-700'
          >
            blueto
          </NavLink>

          <p className=' text-sm text-slate-300 '>
            © {new Date().getFullYear()} blueto tech pvt ltd
          </p>
        </div>
        <nav className='navigation' aria-label='Footer Navigation'>
          <ul className='flex items-center gap-1'>
            {links.map(({ to, link }, index) => (
              <React.Fragment key={link}>
                <li>
                  <NavLink
                    to={to}
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-lg font-normal text-slate-100 transition-colors duration-150 hover:text-pink-700"
                    )}
                  >
                    {link}
                  </NavLink>
                </li>
                {index < links.length - 1 && (
                  <span
                    className='text-2xl font-thin leading-[0] text-slate-400'
                    aria-hidden='true'
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className='socials inline-flex justify-center sm:justify-end'>
          <NavLink
            to='#'
            className='p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-cyan-400'
          >
            <FaGithub />
          </NavLink>

          <NavLink
            to='#'
            className='p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-cyan-400'
          >
            <FaLinkedin />
          </NavLink>
        </div>
      </div>
    </Bounded>
  );
}
