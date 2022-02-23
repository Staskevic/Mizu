

gsap.registerPlugin(ScrollTrigger);

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


  const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".mizme",
        markers: true,
        start: "top 90%",
        end: "top -30%",
        scrub: 1
    }
});

tl2.to(".mizme", 0.6, {x: (ix, target) => gsap.getProperty(target, 'width') * -0.83 } )
.to(".mizme", {x: (ix, target) => gsap.getProperty(target, 'width') * -0.83 } )
    .to(".mizme",0.3,  {x: 0} )

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".ci",
            markers: true,
            pin: true,
            pinSpacing: false,
            start: "bottom 90%",
            end: "bottom -20%",
            scrub: .2
        }
        
    });
    
    tl.from(".ci", {clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 ,
    // content:'url(\"data:image/svg+xml,<svg width=\'10\' viewBox=\'0 0 8 8\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'4\' cy=\'4\' r=\'3\' fill=\'red\'/></svg>\") ' ,
    // content: url("data:image/svg+xml,<svg width=''10'' viewBox=''0 0 8 8'' xmlns=''http://www.w3.org/2000/svg''><circle cx=''4'' cy=''4'' r=''4'' fill=''red''/></svg>"),
     } )
    // tl.from(".ci", {clipPath:'polygon(0 0, 100% 0, 100% 0, 0 0)'} )

    //   tl.to(".ci", {clipPath:'(0 0, 100% 0, 100% 0, 0 3%)'} )


