import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <span
        className={`
          relative inline-block bg-gradient-to-r from-primary via-accent-foreground to-primary 
          bg-clip-text text-transparent bg-[length:200%_auto]
          ${isGlitching ? 'animate-glitch' : ''}
        `}
        style={{
          animation: 'gradient 3s linear infinite',
        }}
        data-text={text}
      >
        {text}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-primary bg-clip-text text-transparent"
            style={{
              transform: 'translate(-2px, -2px)',
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 bg-gradient-to-r from-blue-500 to-accent-foreground bg-clip-text text-transparent"
            style={{
              transform: 'translate(2px, 2px)',
              opacity: 0.8,
            }}
          >
            {text}
          </span>
        </>
      )}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </div>
  );
};
