import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * HeroCTA Component
 */
export const HeroCTA = ({ children, className, ...props }: any) => {
  return (
    <div className={twMerge(clsx('', className))} {...props}>
      {children}
    </div>
  );
};
