import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Grid Component
 */
export const Grid = ({ children, className, ...props }: any) => {
  return (
    <div className={twMerge(clsx('', className))} {...props}>
      {children}
    </div>
  );
};
