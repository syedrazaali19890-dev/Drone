import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Toast Component
 */
export const Toast = ({ children, className, ...props }: any) => {
  return (
    <div className={twMerge(clsx('', className))} {...props}>
      {children}
    </div>
  );
};
