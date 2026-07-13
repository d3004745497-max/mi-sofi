// =======================
// ESTRELLAS
// =======================

const estrellas = document.getElementById("estrellas");

if(estrellas){

    for(let i=0;i<1000;i++){

        const e=document.createElement("div");

        e.className="estrella";

        const s=Math.random()*2+1;

        e.style.width=s+"px";
        e.style.height=s+"px";

        e.style.left=Math.random()*100+"vw";
        e.style.top=Math.random()*100+"vh";

        e.style.opacity=Math.random();

        e.style.animationDuration=(2+Math.random()*5)+"s";

        estrellas.appendChild(e);

    }

}

// =======================
// PANTALLAS
// =======================

const pantallas=document.querySelectorAll(".pantalla");

function mostrar(id){

    pantallas.forEach(p=>p.classList.remove("activa"));

    const pantalla=document.getElementById(id);

    if(pantalla){

        pantalla.classList.add("activa");

    }

}

// =======================
// BOTÓN INICIO
// =======================

const btnInicio=document.getElementById("btnInicio");

if(btnInicio){

    btnInicio.onclick=()=>{

        mostrar("huella");

    };

}

// =======================
// HUELLA
// =======================

const musica=document.getElementById("musica");
const huella=document.getElementById("huellaImg");
const barra=document.getElementById("progreso");


let tiempo;
let progreso=0;

function iniciarHuella(){

progreso=0;

barra.style.width="0%";

tiempo=setInterval(()=>{

progreso+=2;

barra.style.width=progreso+"%";
if(progreso>=100){

    clearInterval(tiempo);

    mostrar("universoPantalla");

    if(musica){

        musica.volume = 0.35;

        musica.currentTime = 0;

        musica.play().catch(error=>{
            console.log(error);
        });

    }

setTimeout(()=>{

mostrar("corazonPantalla");

setTimeout(()=>{

mostrar("recuerdosPantalla");

},10000);

},5000);

}

},60);

}

function detenerHuella(){

clearInterval(tiempo);

progreso=0;

barra.style.width="0%";

}

if(huella){

huella.addEventListener("mousedown",iniciarHuella);
huella.addEventListener("mouseup",detenerHuella);
huella.addEventListener("mouseleave",detenerHuella);

huella.addEventListener("touchstart",iniciarHuella);
huella.addEventListener("touchend",detenerHuella);

}
// =======================
// RECUERDOS
// =======================

const recuerdos=[
{
foto:"IMG/NOSOTROS/1.jpg",
titulo:"Nuestro primer recuerdo ❤️",
texto:"Hay momentos que el tiempo jamás podrá borrar."
},
{
foto:"IMG/NOSOTROS/2.jpg",
titulo:"Cada aventura contigo ✨",
texto:"Cada día contigo hizo mi mundo mejor."
},
{
foto:"IMG/NOSOTROS/3.jpg",
titulo:"Mi lugar favorito 🤍",
texto:"Nunca fue un lugar... siempre fuiste tú."
}
];

let recuerdoActual=0;

const fotoRecuerdo=document.getElementById("fotoRecuerdo");
const tituloRecuerdo=document.getElementById("tituloRecuerdo");
const textoRecuerdo=document.getElementById("textoRecuerdo");

function cargarRecuerdo(){

if(!fotoRecuerdo)return;

fotoRecuerdo.src=recuerdos[recuerdoActual].foto;
tituloRecuerdo.textContent=recuerdos[recuerdoActual].titulo;
textoRecuerdo.textContent=recuerdos[recuerdoActual].texto;

}

cargarRecuerdo();

const btnAnterior=document.getElementById("anteriorRecuerdo");
const btnSiguiente=document.getElementById("siguienteRecuerdo");
const btnContinuar=document.getElementById("continuarRecuerdos");

if(btnAnterior){

btnAnterior.onclick=()=>{

if(recuerdoActual>0){

recuerdoActual--;

cargarRecuerdo();

}

};

}

if(btnSiguiente){

btnSiguiente.onclick=()=>{

if(recuerdoActual<recuerdos.length-1){

recuerdoActual++;

cargarRecuerdo();

}

};

}

if(btnContinuar){

btnContinuar.onclick=()=>{

mostrar("sofiPantalla");

cargarSofi();

};

}

// =======================
// SOFI
// =======================

const sofi=[

{
foto:"IMG/SOFI/1.jpg",
titulo:"Admiro tu forma de ver el mundo 🌷",
texto:"Siempre encuentras belleza donde otros no la ven."
},

{
foto:"IMG/SOFI/2.jpg",
titulo:"Tu calma también es un hogar ☀️",
texto:"Contigo hasta los días difíciles pesan menos."
},

{
foto:"IMG/SOFI/3.jpg",
titulo:"Nunca dejas de sorprenderme 🌸",
texto:"Siempre encuentro una razón nueva para admirarte."
},

{
foto:"IMG/SOFI/4.jpg",
titulo:"Lo mejor de ti no se ve 💛",
texto:"Está en tu corazón, en tu forma de querer y de cuidar."
},

{
foto:"IMG/SOFI/5.jpg",
titulo:"Tu esencia es lo que enamora ✨",
texto:"No intentas parecer alguien más, y eso te hace única."
},

{
foto:"IMG/SOFI/6.jpg",
titulo:"Gracias por ser tú 🌻",
texto:"Porque tu autenticidad es una de las cosas que más amo."
},

{
foto:"IMG/SOFI/7.jpg",
titulo:"Hay detalles tuyos que jamás olvidaré ❤️",
texto:"Tu risa, tus ocurrencias y la paz que siento cuando estoy contigo."
},

{
foto:"IMG/SOFI/8.jpg",
titulo:"Y si pudiera volver a empezar... 🫶",
texto:"Volvería a escogerte una y otra vez."
}

];

let sofiActual=0;

const fotoSofi=document.getElementById("fotoSofi");
const tituloSofi=document.getElementById("tituloSofi");
const textoSofi=document.getElementById("textoSofi");
const btnSofi=document.getElementById("btnSofi");

function cargarSofi(){

    fotoSofi.src=sofi[sofiActual].foto;
    tituloSofi.textContent=sofi[sofiActual].titulo;
    textoSofi.textContent=sofi[sofiActual].texto;

}

cargarSofi();

btnSofi.onclick=()=>{

    sofiActual++;

if(sofiActual>=sofi.length){

    mostrar("sobrePantalla");

    return;

}

cargarSofi();

};
// =======================
// SOBRE
// =======================

const sobre = document.getElementById("sobre");

if(sobre){

    sobre.onclick=()=>{

        mostrar("cartaPantalla");

    };

}



// =======================
// CARTA
// =======================

const btnCarta = document.getElementById("btnCarta");

if (btnCarta) {
    btnCarta.onclick = () => {
        mostrar("floresPantalla");
    };
}

// =======================
// FLORES
// =======================

const btnFlores = document.getElementById("btnFlores");

if (btnFlores) {
    btnFlores.onclick = () => {
        mostrar("contadorPantalla");
    };
}

// =======================
// CONTADOR
// =======================

const btnContador = document.getElementById("btnContador");

if (btnContador) {
    btnContador.onclick = () => {
        mostrar("marvelPantalla");
    };
}

const inicio = new Date("2019-02-02T08:00:00");

function actualizarContador() {

    const ahora = new Date();
    const diferencia = ahora - inicio;

    const segundos = Math.floor(diferencia / 1000) % 60;
    const minutos = Math.floor(diferencia / 1000 / 60) % 60;
    const horas = Math.floor(diferencia / 1000 / 60 / 60) % 24;
    const diasTotales = Math.floor(diferencia / 1000 / 60 / 60 / 24);

    const anios = Math.floor(diasTotales / 365);
    const meses = Math.floor((diasTotales % 365) / 30);
    const dias = (diasTotales % 365) % 30;

    const eA = document.getElementById("anios");
    const eM = document.getElementById("meses");
    const eD = document.getElementById("dias");
    const eH = document.getElementById("horas");
    const eMin = document.getElementById("minutos");
    const eS = document.getElementById("segundos");

    if (!eA) return;

    eA.textContent = anios;
    eM.textContent = meses;
    eD.textContent = dias;
    eH.textContent = horas;
    eMin.textContent = minutos;
    eS.textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);
// =======================
// CORAZÓN DE PARTÍCULAS
// =======================

const heartCanvas = document.getElementById("corazonParticulas");

if (heartCanvas) {

const ctx = heartCanvas.getContext("2d");

const W = 700;
const H = 700;

heartCanvas.width = W;
heartCanvas.height = H;

const puntos = [];

for (let i = 0; i < 3500; i++) {

    const t = Math.random() * Math.PI * 2;
    const r = Math.random();

    const hx = 16 * Math.pow(Math.sin(t), 3) * r;

    const hy = (
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t)
    ) * r;

    puntos.push({

        x: Math.random() * W,
        y: Math.random() * H,

        tx: W / 2 + hx * 16,
        ty: H / 2 - hy * 16,

        vx: 0,
        vy: 0,

        radio: Math.random() * 1.8 + 0.5

    });

}

let escala = 1;
let crecer = true;

function frame() {

    ctx.clearRect(0, 0, W, H);

    if (crecer) {

        escala += 0.0015;

        if (escala > 1.05) crecer = false;

    } else {

        escala -= 0.0015;

        if (escala < 1) crecer = true;

    }

    ctx.save();

    ctx.translate(W / 2, H / 2);

    ctx.scale(escala, escala);

    ctx.translate(-W / 2, -H / 2);

    for (const p of puntos) {

        p.vx += (p.tx - p.x) * 0.0007;
        p.vy += (p.ty - p.y) * 0.0007;

        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.radio, 0, Math.PI * 2);

        const color = Math.random() > 0.5
            ? "rgba(255,79,163,0.9)"
            : "rgba(120,220,255,0.9)";

        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.fillStyle = color;

        ctx.fill();

    }

    ctx.restore();

    requestAnimationFrame(frame);

}

frame();

}