import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  const links = [
    {
      to: '/company',
      link: 'company',
    },
    {
      to: '/products',
      link: 'products',
    },
    {
      to: '/services',
      link: 'services',
    },
  ];
  useEffect(() => {
    const closeNavbar = () => {
      setOpen(false);
    };

    document.body.addEventListener('click', closeNavbar);

    return () => {
      document.body.removeEventListener('click', closeNavbar);
    };
  }, []);
  return (
    <nav aria-label='Main navigation'>
      <ul className='flex flex-col  justify-between rounded-b-lg  bg-slate-50  px-4 py-2 mb-0 md:mb-0  md:flex-row md:items-center md:rounded-xl'>
        <div className='flex items-center justify-between  z-50'>
          <NavLink to='/' className='text-2xl font-bold ml-10 text-slate-900'>
            blueto
          </NavLink>

          <button
            aria-expanded={open}
            aria-label='Open menu'
            className='block p-2 text-xl text-slate-800 md:hidden'
            onClick={(event) => {
              event.stopPropagation();
              setOpen(!open);
            }}
          >
            {!open ? <MdMenu /> : <MdClose />}
          </button>
        </div>
        <div
          className={clsx(
            `fixed bottom-0 left-0 right-0 top-14 z-50 flex flex-col h-72  ${
              !open ? 'mx-0' : 'ml-10 mr-1'
            } rounded-xl items-end gap-4 bg-gray-50 pr-4  pt-10 transition-transform duration-300 ease-in-out md:hidden`,
            open ? 'translate-x-0 ' : 'translate-x-[100%] mx-0'
          )}
        >
          {/* <button
            aria-label='Close menu'
            aria-expanded={open}
            className='fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden '
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button> */}
          {links.map(({ to, link }, index) => (
            <React.Fragment key={link}>
              <li className=' '>
                <NavLink
                  to={to}
                  className={clsx(
                    'group relative block overflow-hidden rounded px-3 py-2 text-xl font-bold text-slate-900 '
                  )}
                  onClick={() => setOpen(false)}
                  aria-current={pathname.includes(link) ? 'page' : undefined}
                >
                  <span
                    className={clsx(
                      'absolute inset-0 z-0 h-full rounded bg-pink-900/50  transition-transform  duration-300 ease-in-out group-hover:translate-y-0',
                      pathname.includes(link)
                        ? 'translate-y-10'
                        : 'translate-y-12'
                    )}
                  />
                  <span className='relative'>{link}</span>
                </NavLink>
              </li>
              {index < links.length - 1 && (
                <span
                  className='hidden text-4xl font-thin leading-[0] text-slate-400 md:inline'
                  aria-hidden='true'
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <li>
            <Button
              to='/contact'
              link='contact'
              className='ml-3 text-xl z-50 bg-black'
              setOpen={setOpen}
            />
          </li>
        </div>
        <DesktopMenu pathname={pathname} links={links} setOpen={setOpen} />
      </ul>
    </nav>
  );
};

function DesktopMenu({ pathname, links, setOpen }) {
  return (
    <div className='relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex'>
      {links.map(({ to, link }, index) => (
        <React.Fragment key={link}>
          <li>
            <NavLink
              to={to}
              className={clsx(
                'group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900'
              )}
              aria-current={pathname.includes(link) ? 'page' : undefined}
            >
              <span
                className={clsx(
                  'absolute inset-0 z-0 h-full rounded bg-pink-900/50   transition-transform  duration-300 ease-in-out group-hover:translate-y-0 ',
                  pathname.includes(link) ? 'translate-y-7' : 'translate-y-9 '
                )}
              />
              <span className='relative'>{link}</span>
            </NavLink>
          </li>
          {index < links.length - 1 && (
            <span
              className='hidden text-4xl font-thin leading-[0] text-slate-400 md:inline'
              aria-hidden='true'
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}
      <li>
        <Button
          to='/contact'
          link='contact'
          className='ml-3  px-4 py-1'
          setOpen={setOpen}
        />
      </li>
    </div>
  );
}
export default Navbar;
