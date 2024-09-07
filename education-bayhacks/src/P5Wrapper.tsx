// src/P5Wrapper.tsx
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new p5(sketch, canvasRef.current as HTMLElement);
    return () => {
      canvas.remove();
    };
  }, [sketch]);

  return <div ref={canvasRef} />;
};

export default P5Wrapper;
