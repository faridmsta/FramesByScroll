'use client';
import React, { useEffect, useRef } from 'react';

const Video: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameCount = 55;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const html = document.documentElement;

    const img = new Image();
    img.src = '/frames/watch00.jpg';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    img.onload = () => {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      img.src = `/frames/watch${index.toString().padStart(2, '0')}.jpg`;
      img.onload = () => {
        if (context) {
          const x = (canvas.width - img.width) / 2;
          const y = (canvas.height - img.height) / 2;
          context.drawImage(img, x, y);
        }
      };
    };

    const handleScroll = () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));

      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="videoSec">
      <div className="canvasContainer">
        <canvas ref={canvasRef} id="scroll-sequence"></canvas>
      </div>
    </section>
  );
};

export default Video;
