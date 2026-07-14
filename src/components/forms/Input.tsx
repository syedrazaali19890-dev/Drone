import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, required, ...props }, ref) => {
    const generatedId = id || Math.random().toString(36).substring(7);
    const errorId = `${generatedId}-error`;
    
    return (
      <div className="flex flex-col w-full space-y-2">
        {label && (
          <label htmlFor={generatedId} className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wider font-mono">
            {label} {required && <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          id={generatedId}
          ref={ref}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          aria-required={required}
          className={twMerge(
            clsx(
              "flex w-full min-h-[48px] rounded-[var(--radius-sm)] border bg-[var(--color-bg-secondary)] px-4 py-3 text-sm text-white transition-colors outline-none",
              "border-[var(--color-border)] hover:border-white/30",
              "focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:border-transparent",
              "placeholder:text-[var(--color-text-secondary)]/50",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )
          )}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-xs text-red-500 font-mono mt-1" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
