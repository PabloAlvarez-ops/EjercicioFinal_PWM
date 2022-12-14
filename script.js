let animatingBlock = document.querySelector(".block");
let animation = anime({
  // qué elementos animamos?
  targets: [animatingBlock],
  // cómo animamos?
  duration: 1500,
  delay: 1000,
  direction: "alternate",
  loop: 3,
  endDelay: 1000,
  easing: "easeInOutSine",
  // qué propiedades?
  translateX: 500
});