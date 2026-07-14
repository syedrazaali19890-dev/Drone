import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DynamicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  mediaId?: string;
  fallbackSrc?: string;
}

export const DynamicImage = ({ mediaId, fallbackSrc, className, alt, ...props }: DynamicImageProps) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!mediaId) {
      setSrc(fallbackSrc || null);
      setLoading(false);
      return;
    }
    const baseUrl = import.meta.env.VITE_MEDIA_URL || 'http://localhost:5000';
    const url = `${baseUrl}/uploads/images/${mediaId}`;
    
    const img = new Image();
    img.src = url;
    img.onload = () => { setSrc(url); setLoading(false); };
    img.onerror = () => { setSrc(fallbackSrc || null); setError(true); setLoading(false); };
  }, [mediaId, fallbackSrc]);

  // If no alt is provided, we assume the image is decorative and hide it from screen readers.
  const isDecorative = !alt || alt.trim() === '';

  return (
    <div className={twMerge(clsx('relative overflow-hidden bg-[var(--color-surface)]', className))} aria-busy={loading}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg-secondary)] animate-pulse" aria-hidden="true">
           <div className="w-8 h-8 border-4 border-[var(--color-border)] border-t-[var(--color-accent)] rounded-full animate-spin" />
        </div>
      )}
      
      {src ? (
        <img 
          src={src} 
          alt={isDecorative ? "" : alt} 
          aria-hidden={isDecorative ? "true" : undefined}
          className={twMerge(clsx('w-full h-full object-cover transition-opacity duration-500', loading ? 'opacity-0' : 'opacity-100'))} 
          {...props} 
        />
      ) : (
        !loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface)]">
            <span className="text-[var(--color-text-secondary)] text-sm uppercase tracking-widest font-mono" aria-hidden="true">Image Not Found</span>
            <span className="sr-only">Image failed to load</span>
          </div>
        )
      )}
    </div>
  );
};
