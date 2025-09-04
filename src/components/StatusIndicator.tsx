interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'busy';
  label: string;
}

export const StatusIndicator = ({ status, label }: StatusIndicatorProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'hsl(var(--matrix-green))';
      case 'busy':
        return 'hsl(var(--plasma-pink))';
      case 'offline':
        return 'hsl(var(--muted-foreground))';
      default:
        return 'hsl(var(--matrix-green))';
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div 
          className="w-3 h-3 rounded-full animate-pulse-glow"
          style={{ 
            backgroundColor: getStatusColor(),
            boxShadow: `0 0 10px ${getStatusColor()}, 0 0 20px ${getStatusColor()}50`
          }}
        />
        {status === 'online' && (
          <div 
            className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
            style={{ backgroundColor: getStatusColor() }}
          />
        )}
      </div>
      <span className="font-code text-sm text-ghost-white">
        Status: <span style={{ color: getStatusColor() }}>{label}</span>
      </span>
    </div>
  );
};