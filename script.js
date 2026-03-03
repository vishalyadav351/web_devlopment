// Get Music Element
var music = document.getElementById("bgMusic");


// ===== Open Gallery =====
document.getElementById("openGallery").onclick = function () {

    document.getElementById("gallery").classList.add("active");
    document.querySelector(".hero").classList.add("hide");

    // 🎵 Play Music
    if (music) {
        music.volume = 0.3; // soft start
        music.play().catch(function(){});
    }
};


// ===== Close Gallery =====
document.getElementById("closeGallery").onclick = function () {

    document.getElementById("gallery").classList.remove("active");
    document.querySelector(".hero").classList.remove("hide");

    // 🎵 Optional: Pause music when closing
    if (music) {
        music.pause();
        music.currentTime = 0; // reset song
    }
};



// ===== Golden Cinematic Particles =====

var canvas = document.getElementById("particles");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var particles = [];

function Particle(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedY = Math.random() * 0.5 + 0.2;
    this.speedX = Math.random() * 0.5 - 0.25;
}

Particle.prototype.update = function(){
    this.y += this.speedY;
    this.x += this.speedX;

    if(this.y > canvas.height){
        this.y = 0;
        this.x = Math.random() * canvas.width;
    }

    if(this.x > canvas.width || this.x < 0){
        this.x = Math.random() * canvas.width;
    }
};

Particle.prototype.draw = function(){
    ctx.fillStyle = "rgba(255,215,0,0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

function init(){
    for(var i = 0; i < 150; i++){
        particles.push(new Particle());
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
