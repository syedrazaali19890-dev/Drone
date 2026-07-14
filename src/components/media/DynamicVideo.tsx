import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DynamicVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  mediaId?: string;
  fallbackPoster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export const DynamicVideo = ({ mediaId, fallbackPoster, className, ...props }: DynamicVideoProps) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mediaId) {
      setLoading(false);
      return;
    }

    const baseUrl = import.meta.env.VITE_MEDIA_URL || 'http://localhost:5000';
    const url = `${baseUrl}/uploads/videos/${mediaId}`;
    
    // For videos, we just set the URL. The browser handles loading.
    setSrc(url);
    setLoading(false);
  }, [mediaId]);

  return (
    <div className={twMerge(clsx('relative overflow-hidden bg-[var(--color-bg-secondary)]', className))}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
           <div className="w-8 h-8 border-4 border-[var(--color-border)] border-t-[var(--color-accent)] rounded-full animate-spin"></div>
        </div>
      )}
      
      {src ? (
        <video 
          src={src}
          poster={fallbackPoster}
          className="w-full h-full object-cover"
          autoPlay={props.autoPlay ?? true}
          muted={props.muted ?? true}
          loop={props.loop ?? true}
          playsInline
          {...props} 
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface)]">
          <span className="text-[var(--color-text-secondary)] text-sm uppercase tracking-widest font-mono">Video Unavailable</span>
        </div>
      )}
    </div>
  );
};
