import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * RevealWrapper Component
 */
export const RevealWrapper = ({ children, className, ...props }: any) => {
  return (
    <div className={twMerge(clsx('', className))} {...props}>
      {children}
    </div>
  );
};
