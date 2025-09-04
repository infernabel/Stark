interface SkillChipProps {
  skill: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const SkillChip = ({ skill, level = 'intermediate' }: SkillChipProps) => {
  const getLevelColor = () => {
    switch (level) {
      case 'beginner':
        return 'hsl(var(--electric-blue))';
      case 'intermediate':
        return 'hsl(var(--neon-cyan))';
      case 'advanced':
        return 'hsl(var(--quantum-purple))';
      case 'expert':
        return 'hsl(var(--plasma-pink))';
      default:
        return 'hsl(var(--electric-blue))';
    }
  };

  const getLevelDots = () => {
    const dots = ['beginner', 'intermediate', 'advanced', 'expert'].indexOf(level) + 1;
    return Array.from({ length: 4 }, (_, i) => (
      <div
        key={i}
        className="w-1 h-1 rounded-full"
        style={{
          backgroundColor: i < dots ? getLevelColor() : 'hsl(var(--neural-dark))',
          boxShadow: i < dots ? `0 0 4px ${getLevelColor()}` : 'none'
        }}
      />
    ));
  };

  return (
    <div className="skill-chip group">
      <span className="font-medium">{skill}</span>
      <div className="flex gap-1 ml-2">
        {getLevelDots()}
      </div>
    </div>
  );
};