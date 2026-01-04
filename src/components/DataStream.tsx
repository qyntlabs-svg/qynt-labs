import { useEffect, useRef } from 'react';

export const DataStream = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01';
    const streams: Array<{
      x: number;
      y: number;
      speed: number;
      chars: string[];
    }> = [];

    for (let i = 0; i < 20; i++) {
      const streamLength = Math.floor(Math.random() * 20) + 10;
      streams.push({
        x: Math.random() * 100,
        y: -Math.random() * 100,
        speed: Math.random() * 2 + 1,
        chars: Array.from({ length: streamLength }, () =>
          characters[Math.floor(Math.random() * characters.length)]
        ),
      });
    }

    streams.forEach((stream, index) => {
      const streamEl = document.createElement('div');
      streamEl.className = 'absolute text-primary/20 font-mono text-xs pointer-events-none';
      streamEl.style.left = `${stream.x}%`;
      streamEl.style.top = `${stream.y}%`;
      streamEl.style.animation = `fall ${15 / stream.speed}s linear infinite`;
      streamEl.style.animationDelay = `${index * 0.5}s`;
      streamEl.textContent = stream.chars.join('');
      container.appendChild(streamEl);
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      container.innerHTML = '';
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
