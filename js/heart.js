window.addEventListener("load",()=>{

const canvas=document.getElementById("corazonParticulas");

if(!canvas)return;

const ctx=canvas.getContext("2d");

const W=700;
const H=700;

canvas.width=W;
canvas.height=H;

const puntos=[];

for(let i=0;i<1800;i++){

    const t=Math.random()*Math.PI*2;

    const hx=16*Math.pow(Math.sin(t),3);

    const hy=
    13*Math.cos(t)
    -5*Math.cos(2*t)
    -2*Math.cos(3*t)
    -Math.cos(4*t);

    puntos.push({

        x:Math.random()*W,

        y:Math.random()*H,

        tx:W/2+hx*16,

        ty:H/2-hy*16,

        r:Math.random()*2+0.5,

        a:Math.random()

    });

}

let escala=1;
let crecer=true;

function animar(){

ctx.clearRect(0,0,W,H);

if(crecer){

escala+=0.0015;

if(escala>1.05)crecer=false;

}else{

escala-=0.0015;

if(escala<1)crecer=true;

}

ctx.save();

ctx.translate(W/2,H/2);

ctx.scale(escala,escala);

ctx.translate(-W/2,-H/2);

for(const p of puntos){

p.x+=(p.tx-p.x)*0.03;
p.y+=(p.ty-p.y)*0.03;

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle=`rgba(255,79,163,${p.a})`;

ctx.fill();

}

ctx.restore();

requestAnimationFrame(animar);

}

animar();

});