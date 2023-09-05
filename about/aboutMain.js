let titleAbout = document.querySelector(".about-us-title")
// clone about us title
/*
let copyTitle = titleAbout.cloneNode(true)
let content = document.querySelector("#content")
let count =3;
for (let index = 0; index < count; index++) {
    const element = content;
    element.append(copyTitle)
    
}
*/


let titleAbout2 = document.querySelectorAll(".about-us-title")

let carrouselTitle = gsap.timeline()
carrouselTitle
.to(titleAbout2,{
    duration : 7,
    x:"-100%",
    repeat:-1,
    ease:Linear.easeIn
})

let tl = gsap.timeline()

tl.from(".ligne-vertical",{
    duration :2,
    scaleY :0,
    transformOrigin:"top",
    repeat:-1
})

//text animation 
// 1ere content
//title
let txtAniTitle1 = gsap.timeline()
         document.querySelector(".who-we-are-h2").style.opacity = 1
        txtAniTitle1.from(".who-we-are-h2",{
            duration:1.5,
            y:100,
            opacity:0,
            transformOrigin:"bottom",
           

        })
ScrollTrigger.create({
    trigger:".who-we-are-content-1",
    start:"40% 89%",
    toggleActions:"play none none none",
   animation:txtAniTitle1,
    markers:true,
    
})
//text explain
txtAnitext1 = gsap.timeline()
      let whoWeAreP = document.querySelectorAll(".who-we-are-p")
        whoWeAreP.forEach(element => {
            element.style.opacity = 1
        });
     
        txtAnitext1.from(".who-we-are-p",{
            duration:1,
            y:100,
            opacity:0,
            transformOrigin:"bottom",
            stagger:0.2
           

        })
ScrollTrigger.create({
    trigger:".who-we-are-content-1",
    start:"70% 89%",
    animation:txtAnitext1,
    markers:true,
})

// 2e content
// title2
txtAniTitle2 = gsap.timeline()
         document.querySelector(".who-we-are-h2-2").style.opacity = 1
         txtAniTitle2.from(".who-we-are-h2-2",{
            duration:1.5,
            y:100,
            opacity:0,
            transformOrigin:"bottom",
           

        })
ScrollTrigger.create({
    trigger:".who-we-are-content-2",
    start:"15% 89%",
    end :"110% 94%",
    markers:true,
    animation:txtAniTitle2,

})

// card service 1
cardServiceAni1 = gsap.timeline()
        let cardServices1 = document.querySelectorAll(".card-service-1")
        cardServices1.forEach(element => {
            element.style.opacity = 1
        });
       
        cardServiceAni1.from(".card-service-1",{
            duration:1,
            y:100,
            opacity:0,
            transformOrigin:"bottom",
            stagger:0.2
           

        })
ScrollTrigger.create({
    trigger:".who-we-are-content-2",
    start:"40% 89%",
   animation:cardServiceAni1,
    markers:true,
   
})
// card service animation
cardServiceAni = gsap.timeline()
let cardServices = document.querySelectorAll(".card-service")
cardServices.forEach(element => {
    element.style.opacity = 1
});

cardServiceAni.from(".card-service",{
    duration:1,
    y:100,
    opacity:0,
    transformOrigin:"bottom",
    stagger:0.2
   

})

ScrollTrigger.create({
    trigger:".who-we-are-content-2",
    start:"80% 89%",
   animation:cardServiceAni,
    markers:true,
   
})

//3e content
//title
txtAniTitle3 = gsap.timeline()
        document.querySelector(".our-mission-h2").style.opacity=1
        
       
        txtAniTitle3 .from(".our-mission-h2",{
            duration:1.5,
            y:100,
            opacity:0,
            transformOrigin:"bottom",
            
           

        })

ScrollTrigger.create({
    trigger:".who-we-are-content-3",
    start:"10% 89%",
   animation:txtAniTitle3 ,
    markers:true,
    

})
//card mission 1

cardMission1Ani = gsap.timeline()
let cardMission1 = document.querySelectorAll(".card-mission-1")
  cardMission1.forEach(element => {
      element.style.opacity = 1
  });
document.querySelector(".card-mission-1-first").style.opacity =1
cardMission1Ani.from(".card-mission-1-first",{
      duration:1,
      y:100,
      opacity:0,
      transformOrigin:"bottom",
   
     

  })

  cardMission1Ani.from(".card-mission-1",{
      duration:1,
      y:100,
      opacity:0,
      transformOrigin:"bottom",
      stagger:0.2
     

  })

ScrollTrigger.create({
    trigger:".who-we-are-content-3",
    start:"50% 89%",
    animation:cardMission1Ani,
    markers:true,
   

})
//card mission ani
cardMissionAni = gsap.timeline()
let cardMission = document.querySelectorAll(".card-mission")
  cardMission.forEach(element => {
      element.style.opacity = 1
  });
document.querySelector(".card-mission-first").style.opacity =1
cardMissionAni.from(".card-mission-first",{
      duration:1,
      y:100,
      opacity:0,
      transformOrigin:"bottom",
   
     

  })

  cardMissionAni.from(".card-mission",{
      duration:1,
      y:100,
      opacity:0,
      transformOrigin:"bottom",
      stagger:0.2
     

  })

ScrollTrigger.create({
    trigger:".who-we-are-content-3",
    start:"80% 89%",
    animation:cardMissionAni ,
    markers:true,
   

})

//npm install smooth-scrolling

