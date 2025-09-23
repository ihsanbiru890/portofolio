const images = [
"img/ikhsan1.png",
"img/ikhsan2.png",

];

let index = 0;
const imgElement = document.getElementById("slideshow");

function addGlitchEffect() {
imgElement.classList.add("glitch");

setTimeout(() => {
    // ganti gambar pas glitch
    index = (index + 1) % images.length;
    imgElement.src = images[index];

    imgElement.classList.add("rgb-glitch");

}, 500);
}

setInterval(addGlitchEffect, 5000);

function addGlitchEffect() {
    imgElement.classList.add("glitch");

        setTimeout(() => {
        
            imgElement.style.opacity = 0;

            setTimeout(() => {
            
            index = (index + 1) % images.length;
            imgElement.src = images[index];

        
            imgElement.style.opacity = 1;

            
            imgElement.classList.add("rgb-glitch");
        }, 400); 

    }, 500); 
}

const slideshow = document.getElementById("slideshow");

let sentinel = document.createElement("div");
sentinel.id = "scroll-sentinel";
sentinel.style.position = "absolute";
sentinel.style.top = (window.innerHeight * 1.5) + "px";
sentinel.style.left = "0";
sentinel.style.width = "1px";
sentinel.style.height = "1px";
sentinel.style.pointerEvents = "none";
document.body.appendChild(sentinel);

const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
});
