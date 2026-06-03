const c = document.getElementById('c') as HTMLCanvasElement;
const ctx = c.getContext('2d');
let p: Particle[] = [];
let pc = 500;
let m = { x: null as number | null, y: null as number | null };

function resize(): void {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    p.length = 0;
    init();
}

class Particle {
    ax: number;
    ay: number = 0;
    x: number;
    y: number;
    baseY: number;
    r: number;
    o: number;
    swing: number;
    constructor(ax: number) {
        this.ax = ax;
        this.x = ax;
        this.y = Math.random() * (c.height / 2) + 50;
        this.baseY = this.y;
        this.r = Math.random() * 3 + 2;
        this.o = Math.random() * 0.5 + 0.5;
        this.swing = Math.random() * 0.1 + 0.05;
    }
    update(): void {
        const dx = (m.x as number) - this.x;
        const dy = (m.y as number) - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
            this.x += dx * 0.03;
            this.y += dy * 0.03;
        } else {
            this.x += (this.ax - this.x) * this.swing;
            this.y += (this.baseY - this.y) * this.swing;
        }
    }
    draw(): void {
        ctx.beginPath();
        ctx.moveTo(this.ax, this.ay);
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(255, 215, 0, 0.3)`;
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.o})`;
        ctx.fill();
        ctx.closePath();
    }
}

function init(): void {
    for (let i = 0; i < pc; i++) {
        const ax = Math.random() * c.width;
        p.push(new Particle(ax));
    }
}

function animate(): void {
    ctx.clearRect(0, 0, c.width, c.height);
    p.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', function (e: MouseEvent): void {
    m.x = e.clientX;
    m.y = e.clientY;
});

window.addEventListener('resize', resize);
window.addEventListener('load', resize);

animate();