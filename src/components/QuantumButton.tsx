import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface QuantumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const QuantumButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: QuantumButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'quantum-btn',
    secondary: 'border border-quantum-purple/50 text-quantum-purple hover:bg-quantum-purple/10',
    ghost: 'text-grid-cyan hover:bg-grid-cyan/10 border-transparent',
  };

  return (
    <button
      className={cn(
        'relative rounded-lg font-cyber transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-neon-cyan/50',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};