import React, { forwardRef } from 'react';
import clsx from 'clsx';
const Bounded = forwardRef(
  ({ as: Comp = 'section', className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx('px-4 py-6 md:px-6 md:py-8 lg:py-10', className)}
        {...restProps}
      >
        <div className='mx-auto w-full max-w-7xl'>{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = 'Bounded';

export default Bounded;
