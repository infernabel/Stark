import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface HolographicCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const HolographicCard = ({ children, className, hover = true, ...props }: HolographicCardProps) => {
  return (
    <div
      className={cn(
        'holo-card rounded-xl p-6 backdrop-blur-md',
        hover && 'group cursor-pointer',
        className
      )}
      {...props}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute -top-1 left-0 w-full h-px bg-gradient-horizon opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
      </div>
    </div>
  );
};