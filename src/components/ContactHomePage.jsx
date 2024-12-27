import React from "react";
import { NavLink } from "react-router-dom";
const ContactHomePage = () => {
  return (
    <div className=' mt-10 '>
      <div
        className='mx-auto md:mx-20 md:mr-28 border-2
       border-blue-800/50 rounded-2xl shadow-2xl py-5
        text-slate-100 flex flex-col md:flex-row  items-center justify-center space-y-3 md:space-y-0 md:justify-evenly'
      >
        <h1 className='h1 text-md md:text-2xl '>
          {/* Please don't hesitate to reach out with any inquiries- we're here to
          assist you. */}
          Got questions? Let's chat over a cup of tea! We're here to help
        </h1>
        <NavLink
          to='/contact'
          className='px-4 py-2 text-md text-slate-100 bg-blue-800 md:text-2xl md:px-6 md:py-3 rounded-lg text-center'
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default ContactHomePage;
