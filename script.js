Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle( ".hvr", {videos: ["./0.mp4" ," 2.mp4" , "3.mp4"]});

gsap.to(".fleftelm",{
    scrollTrigger :{
        trigger : "#fimages",
        pin : true,
        start : "top top",
        end : "bottom bottom",
        endTrigger: ".last",
        scrub : 1
    },
    y: "-300%",
    ease:Power1
})

let sections = document.querySelectorAll(".fleftelm");

Shery.imageEffect(".images", {
    style:3 ,
    slideStyle: (setScroll) => {
      window.addEventListener("scroll", () => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index)
                }
            })
        })
      });
    },
  });

  Shery.imageEffect(".images", {
    style: 1 /*OR 5 for different variant */,
    debug: true,
  });