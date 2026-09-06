import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

class HexNode {
  x: number;
  y: number;
  size: number;
  connections: HexNode[] = [];

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 16 + 26;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = this.size * Math.cos(angle);
      const hy = this.size * Math.sin(angle);
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();

    const grad = ctx.createLinearGradient(-this.size, -this.size, this.size, this.size);
    grad.addColorStop(0, '#042414');
    grad.addColorStop(0.5, '#011007');
    grad.addColorStop(1, '#000603');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = 'rgba(0, 255, 136, 0.35)';
    ctx.lineWidth = 1.6;
    ctx.stroke();

    ctx.fillStyle = '#00ff88';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('BC', 0, 0);

    ctx.restore();
  }
}

class Pulse {
  start: HexNode;
  end: HexNode;
  progress: number;
  speed: number;

  constructor(start: HexNode, end: HexNode) {
    this.start = start;
    this.end = end;
    this.progress = Math.random();
    this.speed = 0.003 + Math.random() * 0.003;
  }

  update() {
    this.progress += this.speed;
    if (this.progress >= 1) this.progress = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const px = this.start.x + (this.end.x - this.start.x) * this.progress;
    const py = this.start.y + (this.end.y - this.start.y) * this.progress;

    ctx.beginPath();
    ctx.arc(px, py, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',     // ✅ Nombre correcto
  styleUrls: ['./landing.scss']      // ✅ Nombre correcto
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCircuitCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('heroInteractiveNode') nodeCardRef!: ElementRef<HTMLDivElement>;

  private ctx!: CanvasRenderingContext2D;
  private width = 0;
  private height = 0;
  private hexNodes: HexNode[] = [];
  private pulses: Pulse[] = [];
  private animFrameId: number | null = null;

  ngAfterViewInit(): void {
    if (this.canvasRef) {
      const canvas = this.canvasRef.nativeElement;
      this.ctx = canvas.getContext('2d')!;
      this.resizeCanvas();
      this.animate();
    }
  }

  ngOnDestroy(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.nodeCardRef) return;
    const card = this.nodeCardRef.nativeElement;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotX = ((e.clientY - centerY) / window.innerHeight) * -10;
    const rotY = ((e.clientX - centerX) / window.innerWidth) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  private resizeCanvas() {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
    this.initGrid();
  }

  private initGrid() {
    this.hexNodes = [];
    this.pulses = [];
    const count = Math.min(Math.floor(this.width / 60), 24);

    for (let i = 0; i < count; i++) {
      const x = Math.random() * (this.width * 0.5) + (this.width * 0.45);
      const y = Math.random() * this.height;
      this.hexNodes.push(new HexNode(x, y));
    }

    for (let i = 0; i < this.hexNodes.length; i++) {
      for (let j = i + 1; j < this.hexNodes.length; j++) {
        const dist = Math.hypot(this.hexNodes[i].x - this.hexNodes[j].x, this.hexNodes[i].y - this.hexNodes[j].y);
        if (dist < 220) {
          this.hexNodes[i].connections.push(this.hexNodes[j]);
          this.pulses.push(new Pulse(this.hexNodes[i], this.hexNodes[j]));
        }
      }
    }
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const node of this.hexNodes) {
      for (const target of node.connections) {
        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y);
        this.ctx.lineTo(target.x, target.y);
        this.ctx.strokeStyle = 'rgba(0, 255, 136, 0.15)';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      }
    }

    for (const node of this.hexNodes) node.draw(this.ctx);
    for (const pulse of this.pulses) {
      pulse.update();
      pulse.draw(this.ctx);
    }

    this.animFrameId = requestAnimationFrame(this.animate);
  };
  
}