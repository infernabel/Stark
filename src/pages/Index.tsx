import { useState, useEffect } from 'react';
import { Copy, Github, Mail, Terminal, Cpu, Database, Sparkles } from 'lucide-react';
import { NeuralBackground } from '@/components/NeuralBackground';
import { HolographicCard } from '@/components/HolographicCard';
import { StatusIndicator } from '@/components/StatusIndicator';
import { SkillChip } from '@/components/SkillChip';
import { QuantumButton } from '@/components/QuantumButton';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [currentAge, setCurrentAge] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

useEffect(() => {
  const birthDate = new Date('2025-9-8'); // Birth date

  const updateAge = () => {
    const now = new Date();
    const age =
      (now.getTime() - birthDate.getTime()) /
      (1000 * 60 * 60 * 24 * 365.25);
    setCurrentAge(parseFloat(age.toFixed(8)));
  };

  // Initial call
  updateAge();

  // Keep updating every 100ms
  const interval = setInterval(updateAge, 100);

  // Initialization sequence
  setTimeout(() => setIsInitialized(true), 500);

  // Cleanup on unmount
  return () => clearInterval(interval);
}, []);


  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
      duration: 2000,
    });
  };

  const skills = [
    { name: 'Java', level: 'intermediate' as const },
    { name: 'Skript', level: 'intermediate' as const },
    { name: 'Minecraft Plugins', level: 'expert' as const },
    { name: 'HTML', level: 'medium' as const },
    { name: 'CSS', level: 'medium' as const },
    { name: 'JavaScript', level: 'intermediate' as const },
    { name: 'Video Editing', level: 'intermediate' as const },
    { name: 'Server Management', level: 'expert' as const },
  ];

  const projects = [
    {
      name: 'Minecraft Server Developer',
      description: 'I build custom Minecraft servers using plugins, mods, and advanced setups for players.',
      tech: ['PaperMC', 'Spigot', 'Skript', 'Mods', 'Plugins'],
      status: 'Active'
    },
    {
      name: 'Website Creator',
      description: 'I make small websites and dashboards, mainly for Minecraft servers.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      status: 'Learning'
    },
    {
      name: 'Video Editor',
      description: 'I create small video edits for YouTube and social media content.',
      tech: ['CapCut', 'Premiere Pro'],
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden neural-grid">
      <NeuralBackground />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className={`transition-all duration-1000 ${isInitialized ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grid-cyan/30 bg-neural-dark/50 backdrop-blur-sm mb-4">
                <Terminal className="w-4 h-4 text-grid-cyan" />
                <span className="text-sm font-code text-ghost-white">INITIALIZING NEURAL INTERFACE...</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-cyber font-bold neural-text glow-text mb-4 animate-gradient-shift">
              STARK
            </h1>
            <div className="text-xl md:text-2xl font-code text-neural-white mb-6">
              <span className="text-ghost-white">Developer</span>
              <span className="text-grid-cyan mx-2">•</span>
              <span className="text-ghost-white">Owner</span>
              <span className="text-quantum-purple mx-2">•</span>
              <span className="text-ghost-white">Innovator</span>
            </div>
            
            <StatusIndicator status="online" label="Connected to the Matrix" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <HolographicCard className="text-center animate-float">
            <div className="mb-4">
              <Cpu className="w-12 h-12 text-electric-blue mx-auto mb-2" />
              <h3 className="text-xl font-cyber text-neural-white">Neural Age</h3>
            </div>
            <div className="font-code text-2xl text-grid-cyan glow-text">
              {currentAge.toFixed(8)} years
            </div>
            <p className="text-sm text-ghost-white mt-2">Quantum cycles elapsed</p>
          </HolographicCard>

          <HolographicCard className="text-center animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              <Database className="w-12 h-12 text-quantum-purple mx-auto mb-2" />
              <h3 className="text-xl font-cyber text-neural-white">Location</h3>
            </div>
            <div className="font-code text-2xl text-hologram-teal glow-text">
              Cyberspace
            </div>
            <p className="text-sm text-ghost-white mt-2">Digital dimension coordinates</p>
          </HolographicCard>

          <HolographicCard className="text-center animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="mb-4">
              <Sparkles className="w-12 h-12 text-plasma-pink mx-auto mb-2" />
              <h3 className="text-xl font-cyber text-neural-white">Mission</h3>
            </div>
            <div className="font-code text-lg text-neon-cyan glow-text">
              Build the Future
            </div>
            <p className="text-sm text-ghost-white mt-2">Current objective status</p>
          </HolographicCard>
        </div>

        {/* About Section */}
        <HolographicCard className="mb-16">
          <h2 className="text-3xl font-cyber text-neural-white mb-6 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-grid-cyan" />
            SYSTEM.PROFILE
          </h2>
          <p className="text-ghost-white leading-relaxed text-lg font-code">
            Minecraft server developer and web project creator, specializing in custom servers, plugins, 
            and small web applications. Experienced in creating engaging in-game experiences and video edits, 
            with a focus on learning, improving, and delivering quality content for the gaming community.
            Always exploring new technologies and pushing the boundaries of digital innovation.
          </p>
        </HolographicCard>

        {/* Skills Matrix */}
        <HolographicCard className="mb-16">
          <h2 className="text-3xl font-cyber text-neural-white mb-6 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-electric-blue" />
            NEURAL.CAPABILITIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <SkillChip skill={skill.name} level={skill.level} />
              </div>
            ))}
          </div>
        </HolographicCard>

        {/* Projects Grid */}
        <HolographicCard className="mb-16">
          <h2 className="text-3xl font-cyber text-neural-white mb-6 flex items-center gap-3">
            <Database className="w-8 h-8 text-quantum-purple" />
            ACTIVE.PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className="p-6 rounded-lg border border-electric-blue/30 bg-neural-dark/50 hover:border-neon-cyan/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-cyber text-neural-white mb-2">{project.name}</h3>
                <p className="text-ghost-white text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-code bg-electric-blue/20 text-electric-blue border border-electric-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse-glow" />
                  <span className="text-xs font-code text-matrix-green">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        </HolographicCard>

        {/* Contact Interface */}
        <HolographicCard>
          <h2 className="text-3xl font-cyber text-neural-white mb-6 flex items-center gap-3">
            <Mail className="w-8 h-8 text-neon-cyan" />
            CONNECT.PROTOCOL
          </h2>
          <p className="text-ghost-white mb-8 font-code">
            Initialize secure communication channel. Select preferred transmission method:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuantumButton
              onClick={() => copyToClipboard('tonystark9813', 'Discord ID')}
              className="flex items-center justify-center gap-3"
            >
              <Terminal className="w-5 h-5" />
              Discord 
            </QuantumButton>
            
            <QuantumButton
              variant="secondary"
              onClick={() => copyToClipboard('contact@nexus.dev', 'Email')}
              className="flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
               Mail
            </QuantumButton>
            
            <QuantumButton
              variant="ghost"
              onClick={() => window.open('https://youtu.be/dQw4w9WgXcQ?si=2taUUrxOjtRhecuE', '_blank')}
              className="flex items-center justify-center gap-3"
            >
              <Github className="w-5 h-5" />
              Code 
            </QuantumButton>
          </div>
        </HolographicCard>

        {/* Footer */}
        <div className="text-center mt-16 font-code text-ghost-white/60">
          <p>© 2025 Stark.DEV // All neural pathways operational</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
