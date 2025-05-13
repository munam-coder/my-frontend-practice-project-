const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
function firstpageAnim() {
  let tl = gsap.timeline();

  tl.from(".nav",
    {
      y: "-10",
      opacity: 0,
      duration: 2,
      ease: Expo.easeInout
    })
  tl.to(".boundingelem", {
    y: 0,
    ease: Expo.easeInout,
    duration: 1.5,
    stagger: .2
  })
  tl.from(".herofooter", {
    y: "-10",
    opacity: 0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInout,

  })
}

function circlechaptkarlo() {
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;
  window.addEventListener("mousemove", function (dets) {



        xscale =gsap.utils.clamp(.8,1.2,  dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);
       
    xprev = dets.clientX;
    xprev = dets.clientX;

    circleMouseFollower(xscale, yscale);
  })
}
circlechaptkarlo();

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".minicircel"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale}) `;
  });
}
firstpageAnim()
circleMouseFollower();
