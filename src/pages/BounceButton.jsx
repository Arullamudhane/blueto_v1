const BounceButton = () => {
  return (
    <>
      {' '}
      <span class='inline-block animate-bounce rounded-full p-1 md:p-4 bg-teal-400 text-white text-xs md:text-sm'>
        <svg
          class='w-4 h-4 md:w-6 md:h-6  mx-auto'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
          />
        </svg>
      </span>
    </>
  );
};

export default BounceButton;
