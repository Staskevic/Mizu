

gsap.registerPlugin(ScrollTrigger);


smoothScroll("#content");

// gsap.to(".h11", {
//     scrollTrigger: {
//         trigger: ".h11",
//         start:"top 44%", 
//         end: "top 15%",
//         scrub: 1, 
//         markers: true,
//         // toggleActions: "restart reverse restart reverse" 
//         // play pause resume reverse restart reset complete none  

//     },
//     y: 300,
//     opacity:0,
//     // rotation: 360,
//     // duration: 3
//   }); 

// gsap.to(".ci", {
//     scrollTrigger: {
//         trigger: ".ci",
//         start:"top 0%", 
//         end: "top -250%",
//         // scrub: 1, 
//         pin: true,
//         pinSpacing: false,
//         markers: true
//         // toggleActions: "restart reverse restart reverse" 
//         // play pause resume reverse restart reset complete none  

//     },
//     // x: 500,
//     // rotation: 360,
//     // duration: 6
//   }); 



// gsap.to(".dict1", {
//   scrollTrigger: {
//       trigger: ".dict1",
//       start:"top 10%", 
//       end: "top -0%",
//       scrub: true, 
//       pin: true,
//       pinSpacing: false,
//       markers: true,
//       toggleActions: "restart reverse restart reverse" 
//       // play pause resume reverse restart reset complete none  

//   },

//   x: 500,
//   rotation: 360,
//   duration: 6
// }); 






  gsap.to(".can1", {
    scrollTrigger: {
        trigger: ".can1",
        start:"top 0%", 
        end: "top -510%",
        // scrub: 1, 
        pin: true,
        pinSpacing: false,
        markers: true
        // toggleActions: "restart reverse restart reverse" 
        // play pause resume reverse restart reset complete none  

    },
    // x: 500,
    // rotation: 360,
    // duration: 6
  }); 

//   gsap.to(".ci", {
//     scrollTrigger: {
//         trigger: ".ci",
//         start:"bottom 120%", 
//         end: "bottom -20%",
//         scrub: .2, 
//         pin: true,
//         pinSpacing: false,
//         markers: true
//         // toggleActions: "restart reverse restart reverse" 
//         // play pause resume reverse restart reset complete none  

//     },
//  clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
//     x: 500,
//     // rotation: 360,
//     // duration: 6
//   }); 

const tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".dict1",
      markers: true,
      start: "top 25%",
      end: "top 10%",
      scrub: true,
      pin: true,
      pinSpacing: false
  }
});

tl3.from(".dict1, .mizhead", 0.6, {y: -30, opacity:0  } )
// .to(".mizme", {x: (ix, target) => gsap.getProperty(target, 'width') * -0.83 } )
  // .to(".dict1, .mizhead",0.3,  {y: 0 , opacity:1 } )

tl3.from(".miztext", {opacity: 0 }, "-=0.5")




  const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".mizme",
        markers: true,
        start: "top 90%",
        end: "top -30%",
        scrub: true
    }
});

tl2.to(".mizme", 0.6, {x: (ix, target) => gsap.getProperty(target, 'width') * -0.83 } )
// .to(".mizme", {x: (ix, target) => gsap.getProperty(target, 'width') * -0.83 } )
    .to(".mizme",0.3,  {x: 0} )

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".ci",
            markers: true,
            pin: true,
            pinSpacing: false,
            start: "bottom 90%",
            end: "bottom -20%",
            scrub: true
        }
        
    });
    
    tl.from(".ci", {clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 ,
    // content:'url(\"data:image/svg+xml,<svg width=\'10\' viewBox=\'0 0 8 8\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'4\' cy=\'4\' r=\'3\' fill=\'red\'/></svg>\") ' ,
    // content: url("data:image/svg+xml,<svg width=''10'' viewBox=''0 0 8 8'' xmlns=''http://www.w3.org/2000/svg''><circle cx=''4'' cy=''4'' r=''4'' fill=''red''/></svg>"),
     } )
    // tl.from(".ci", {clipPath:'polygon(0 0, 100% 0, 100% 0, 0 0)'} )

    //   tl.to(".ci", {clipPath:'(0 0, 100% 0, 100% 0, 0 3%)'} )













    // ------------------------------------------------------------


   // this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
function smoothScroll(content, viewport, smoothness) {
  content = gsap.utils.toArray(content)[0];
  smoothness = smoothness || 1;

  gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0});
  gsap.set(content, {overflow: "visible", width: "100%"});

  let getProp = gsap.getProperty(content),
    setProp = gsap.quickSetter(content, "y", "px"),
    setScroll = ScrollTrigger.getScrollFunc(window),
    removeScroll = () => content.style.overflow = "visible",
    killScrub = trigger => {
      let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
      scrub && scrub.kill();
      trigger.animation.progress(trigger.progress);
    },
    height, isProxyScrolling;

  function onResize() {
    height = content.clientHeight;
    content.style.overflow = "visible"
    document.body.style.height = height + "px";
  }
  onResize();
  ScrollTrigger.addEventListener("refreshInit", onResize);
  ScrollTrigger.addEventListener("refresh", () => {
    removeScroll();
    requestAnimationFrame(removeScroll);
  })
  ScrollTrigger.defaults({scroller: content});
  ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
        setProp(-value);
        setScroll(value);
        return;
      }
      return -getProp("y");
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
  });

  return ScrollTrigger.create({
    animation: gsap.fromTo(content, {y:0}, {
      y: () => document.documentElement.clientHeight - height,
      ease: "none",
      onUpdate: ScrollTrigger.update
    }),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: () => height - document.documentElement.clientHeight,
    scrub: smoothness,
    onUpdate: self => {
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },
    onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
  });
}

