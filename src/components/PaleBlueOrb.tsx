import React from 'react';

const PaleBlueOrb: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Main Orb */}
      <div className="relative">
        <div 
          className="w-20 h-20 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, #E6F3FF 0%, #B8E0FF 30%, #87CEEB 60%, #6BB6FF 100%)',
            boxShadow: `
              0 0 20px rgba(135, 206, 235, 0.6),
              0 0 40px rgba(135, 206, 235, 0.4),
              0 0 60px rgba(135, 206, 235, 0.3),
              0 0 80px rgba(135, 206, 235, 0.2)
            `
          }}
        />
        
        {/* Inner glow */}
        <div 
          className="absolute inset-2 rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(230, 243, 255, 0.8) 0%, rgba(184, 224, 255, 0.6) 50%, transparent 100%)',
            animationDuration: '2s'
          }}
        />
        
        {/* Outer pulse ring */}
        <div 
          className="absolute inset-0 w-20 h-20 rounded-full animate-ping"
          style={{
            background: 'radial-gradient(circle, transparent 60%, rgba(135, 206, 235, 0.3) 70%, transparent 100%)',
            animationDuration: '3s'
          }}
        />
        
        {/* Subtle sparkle effect */}
        <div 
          className="absolute inset-0 w-20 h-20 rounded-full"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 1px, transparent 2px),
              radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.6) 1px, transparent 2px),
              radial-gradient(circle at 20% 70%, rgba(255, 255, 255, 0.7) 1px, transparent 2px),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.5) 1px, transparent 2px)
            `,
            animation: 'sparkle 4s ease-in-out infinite'
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PaleBlueOrb;