import React from 'react';

const AgileCard = ({ items }) => {
  let { color, title, subTitle } = items;
  //   console.log(color);
  return (
    <div>
      <div class='reusecard opacity-0 animate-fadeInLeft animation-delay-200  '>
        <div class='flex items-center justify-center    my-4 '>
          <div class='flex  space-x-0  md:space-x-2 md:space-x-reverse '>
            <div
              class='flex items-center justify-center w-10 h-10 rounded-full
             bg-white shadow md:order-1 '
            >
              <svg
                class='fill-emerald-500'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
              >
                <path d='M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z' />
              </svg>
            </div>
          </div>
          <div class='text-slate-500 ml-4 md:ml-14'>
            <div class='flex flex-col gap-4 '>
              <div
                className={`flex flex-col items-center justify-center text-center h-[100px] w-[250px]
               rounded-lg text-white cursor-pointer transition-transform duration-400 transform
                hover:scale-110 ${color}`}
              >
                <p class='text-base font-bold'>{title}</p>
                <p class='text-xs'>{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgileCard;
