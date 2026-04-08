import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none z-0">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="relative h-full border-r border-white/5 overflow-hidden">
          {/* Broad Light Beam / Fill Layer */}
          <div
            className="absolute inset-[0_-20px] bg-linear-to-b from-brand-primary/0 via-brand-primary/30 to-brand-primary/0 opacity-0 animate-grid-beam"
            style={{
              animationDelay: `${(i % 5) * 1.5}s`,
              animationDuration: '8s'
            }}
          />
          {/* Solid fill overlay for a more "filled" look */}
          <div
            className="absolute inset-0 bg-brand-primary/10 opacity-0 animate-grid-solid-fill"
            style={{
              animationDelay: `${(i % 4) * 2}s`,
              animationDuration: '10s'
            }}
          />
        </div>
      ))}

      {/* Self-contained Styles for the Grid Animation */}
      <style>{`
        @keyframes gridBeam {
          0% { transform: translateY(-120%); opacity: 0; }
          20% { opacity: 0.8; }
          50% { transform: translateY(120%); opacity: 1; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-120%); opacity: 0; }
        }
        @keyframes gridSolidFill {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
        }
        .animate-grid-beam {
          animation: gridBeam linear infinite;
        }
        .animate-grid-solid-fill {
          animation: gridSolidFill ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GridBackground;
