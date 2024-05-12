Shery.makeMagnet(".nav-text a");
Shery.makeMagnet(".logo-mid");
Shery.makeMagnet("#pic");
document.querySelector(".container").addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y
  });
});
gsap.from("#svg", {
  x:350,
  y:-200,
  rotate: "360deg",
  repeat: -1,
  duration: 5,
  yoyo: true,
  ease: "back.out(3)"
});
gsap.from("#spring", {
  transform: "rotateY(10deg)",
  y:-200,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "bounce.out",
  scale:0
});
gsap.to("#left-right",{
    y:-250,
    scrollTrigger: {
      trigger: "#left-right",
      scroller: "body",
      start: "top 80%",
      end: "top -10%",
      scrub: 4
  }
});
gsap.to("#arrow-indicate",{
  x:20,
  stagger:0.2,
  yoyo:true,
  duration: 1,
  repeat: -1,
});
gsap.from("#card-container .card",{
  x:1700,
  opacity: 0,
  borderRadius: "100% 100%",
  rotate:"360deg",
  stagger:0.5,
  duration: 2.5,
  scrollTrigger: {
    trigger: "#card-container .card",
    scroller: "body",
    start: "top 45%",
    end: "top -10%",
  }
});
var tl = gsap.timeline();
tl.to(
  "#loader-i",
  {
    scale: 1,
    duration: 1.5,
    opacity: 1,
    stagger: 0.2,
    ease: "elastic.out(1,0.5)",
  },
  "f"
);
tl.to(
  "#loader-i2",
  {
    scale: 1,
    duration: 1.5,
    opacity: 1,
    stagger: -0.2,
    ease: "elastic.out(1,0.5)",
  },
  "f"
);
tl.to("#loader-i", {
    x:-900,
    opacity: 0,
    stagger:0.2
},"c")
tl.to("#loader-i2", {
    x:900,
    opacity: 0,
    stagger:-0.2
},"c")
tl.from("#revel", {
  y:100,
  opacity:0,
  duration: 2,
  ease: "power2",
});
tl.to("#coat", {
  rotate:"360deg",
  scale:2,
  duration: 1.5,
})
tl.to("#loader", {
  top: "-130%",
  delay:0.5
});
tl.from(".logo-mid",{
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: "back.out(3)"
})
tl.from("#a-link", {
  opacity: 0,
  x: -150,
  stagger: 0.3,
  ease: "elastic.out(1,0.4)",
});
tl.from(
  "#pic",
  {
    x: 700,
    rotate: 180,
    duration: 1.7,
    opacity: 0,
    ease: "elastic.out(1,0.2)",
  },
  "a"
);
tl.from("#full-name", {
  x: -700,
  rotate:-180,
  duration: 1.7,
  opacity: 0,
  ease: "elastic.out(1,0.2)",
},"a");
tl.from("#name", {
  opacity: 0,
  y: -300,
  rotate: -180,
  duration:3.5,
  ease: "elastic.out(1,0.2)"
});
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  loop: true,
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
});

var menu = document.querySelector("#menu");
var close = document.querySelector("#close");
var menuItem = document.querySelector("#second-navbar");
menu.addEventListener("click", function(){
gsap.to("#second-navbar", {
  right: "0%",
  duration: 0.5,
})
gsap.from("#second-navbar a", {
  x: 800,
  stagger: 0.3,
  duration: 1,
})
gsap.to("#close",{
  rotate:"180deg",
  duration: 1
})
});
close.addEventListener("click", () => {
  menuItem.style.right = "100%";
  gsap.to("#close",{
    rotate:"0deg",
    duration: 1
  })
});
var allLink = document.querySelectorAll("#second-navbar a");
allLink.forEach((e)=>{
  e.addEventListener("click",()=>{
    menuItem.style.right = "100%";
    gsap.to("#close",{
      rotate:"0deg",
      duration: 1
    })
  })
})
var Path = "M 10 100 Q 500 50 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";
var string = document.getElementById("string");
string.addEventListener("mousemove", function (dets) {
  Path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("#svgs path", {
    attr: { d: Path },
  });
});
string.addEventListener("mouseleave", function () {
  gsap.to("#svgs path", {
    attr: { d: finalPath },
    duration: 2.5,
    ease: "elastic.out(1,0.1)",
  });
});

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");
var video4 = document.getElementById("video4");

card1.addEventListener("mouseenter", () => {
  video1.play();
  video1.style.zIndex = "20";
});
card1.addEventListener("mouseleave", () => {
  video1.pause();
  video1.style.zIndex = "0";
});
card2.addEventListener("mouseenter", () => {
  video2.play();
  video2.style.zIndex = "20";
});
card2.addEventListener("mouseleave", () => {
  video2.pause();
  video2.style.zIndex = "0";
});
card3.addEventListener("mouseenter", () => {
  video3.play();
  video3.style.zIndex = "20";
});
card3.addEventListener("mouseleave", () => {
  video3.pause();
  video3.style.zIndex = "0";
});
card4.addEventListener("mouseenter", () => {
  video4.play();
  video4.style.zIndex = "20";
});
card4.addEventListener("mouseleave", () => {
  video4.pause();
  video4.style.zIndex = "0";
});