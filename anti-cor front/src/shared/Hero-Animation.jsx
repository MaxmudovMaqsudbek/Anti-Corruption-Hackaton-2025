import { useEffect, useRef } from "react";

export default function HeroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Node class for network visualization
    class Node {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.connections = [];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Bounce off edges
        if (this.x <= this.size || this.x >= canvas.width - this.size) {
          this.speedX *= -1;
        }
        if (this.y <= this.size || this.y >= canvas.height - this.size) {
          this.speedY *= -1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      connectTo(node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node);
        }
      }

      drawConnections() {
        if (!ctx) return;
        this.connections.forEach((node) => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = "rgba(20, 184, 166, 0.2)"; // Teal with transparency
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      }
    }

    // Create nodes
    const nodeCount = 20;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      const size = Math.random() * 3 + 2;
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      // Different shades of teal
      const colors = [
        "rgba(20, 184, 166, 0.7)",
        "rgba(13, 148, 136, 0.7)",
        "rgba(15, 118, 110, 0.7)",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      nodes.push(new Node(x, y, size, color));
    }

    // Create connections between nodes
    nodes.forEach((node) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < connectionCount; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        if (randomNode !== node) {
          node.connectTo(randomNode);
        }
      }
    });

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw connections first (so they appear behind nodes)
      nodes.forEach((node) => node.drawConnections());
      // Update and draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-[400px] rounded-lg bg-gradient-to-br from-teal-50 to-white"
      aria-label="Network visualization representing anti-corruption data connections"
    />
  );
}