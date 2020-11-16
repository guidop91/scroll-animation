const introDiv = document.querySelector('.intro');
const video = introDiv.querySelector('video');
const text = introDiv.querySelector('h1');

const section = document.querySelector('section');
const endText = section.querySelector('h1');

// Initialize ScrollMagic controller
const controller = new ScrollMagic.Controller();

// Define options for scenes
const mainSceneOptions = {
  duration: 9000, // height in px of scroll to comprise length of animation
  triggerElement: introDiv,
  triggerHook: 0, // percentage of height of element where animation starts
};

const textSceneOptions = {
  duration: 3000,
  triggerElement: introDiv,
  triggerHook: 0,
};

const endTextOptions = {
  duration: 3000,
  triggerElement: section,
  triggerHook: 0
};

// Add scenes
const mainScene = new ScrollMagic.Scene(mainSceneOptions)
  .setPin(introDiv)
  .addTo(controller);

const textAnimations = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
const textScene = new ScrollMagic.Scene(textSceneOptions)
  .setTween(textAnimations)
  .addTo(controller);

const endTextAnimations = TweenMax.fromTo(endText, 3, { opacity: 0 }, { opacity: 1 });
const endTextScene = new ScrollMagic.Scene(endTextOptions)
  .setTween(endTextAnimations)
  .setPin(section)
  .addTo(controller);

// Video Animation
const accelAmount = 0.1;

let scrollPos = 0;
mainScene.on('update', (event) => {
  scrollPos = event.scrollPos / 1000;
});

let delay = 0;
setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;
  video.currentTime = delay;
}, 1000 / 30);
