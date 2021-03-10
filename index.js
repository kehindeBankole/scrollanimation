
gsap.registerPlugin(ScrollTrigger);
gsap.to(".phone", {
  scrollTrigger: {
    trigger: ".blue",
    scrub: true,
  },
  duration: 1,
  display: "block",
});

gsap.to(".phone3", {
  scrollTrigger: {
    trigger: ".green",
    scrub: true,
    // start: "top 80%",
  },
  duration: 1,
  display: "block",
});
