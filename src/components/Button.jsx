import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

export default function Button({
  to,
  link,
  showIcon = true,
  className,
  setOpen,
}) {
  //   console.log(to, link, pathname);
  return (
    <NavLink
      to={to}
      className={clsx(
        'group relative  flex w-fit items-center  justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 font-bold   transition-transform ease-out  hover:scale-105',
        className
      )}
      onClick={() => setOpen(false)}
    >
      <span
        className={clsx(
          'absolute inset-0 z-0 h-full translate-y-10 bg-slate-300/50 transition-transform  duration-300 ease-in-out group-hover:translate-y-0'
        )}
      />
      <span className='relative flex items-center justify-center gap-1 '>
        {link} {showIcon && <MdArrowOutward className='inline-block' />}
      </span>
    </NavLink>
  );
}
