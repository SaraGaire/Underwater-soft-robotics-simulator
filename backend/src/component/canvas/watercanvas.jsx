import React, { useEffect, useRef } from "react";

export const WaterCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    let angle = 0;
    const animate = () => {
      ctx.clearRect(0, 0, 800, 400);
      ctx.fillStyle = "#0077b6";
      ctx.fillRect(0, 0, 800, 400);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath();
      ctx.arc(400 + Math.sin(angle) * 50, 200, 30, 0, Math.PI * 2);
      ctx.fill();
      angle += 0.03;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} width={800} height={400}></canvas>;
};
