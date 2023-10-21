gsap.registerPlugin(ScrollTrigger);
let change = gsap.timeline()
let change2 = gsap.timeline()
let change3 = gsap.timeline()

//page animation 1er
change.from(".content-change",{
   
   
    duration :0.5,
    scaleY :0,
    transformOrigin:"bottom",
  
    
        
})
.to(".content-change",{
    duration:1
})
.to(".content-change",{
   
   
    duration :0.5,
    scaleY :0,
    transformOrigin:"top",
  
    
        
})

//page animation 2eme
change2.from(".content-change2",{
   
   
    duration :1,
    scaleY :0,
    transformOrigin:"bottom",
  
    
        
})
.to(".content-change2",{
    duration:1
})
.to(".content-change2",{
   
   
    duration :1,
    scaleY :0,
    transformOrigin:"top",
  
    
        
})







//page animation
ScrollTrigger.create({
    trigger:".content",
    start: "95% 89%",
    end: "110% 94%",
    toggleActions:"play none none reverse",
    markers:true,
   
    animation:change,
    onEnter: ()=>{
        


        // stop user to scroll during transition
        let body = document.querySelector("body") 
        body.style.overflowY = "hidden"
        setTimeout(() => {
            body.style.overflowY = "auto"
        }, 3000);
        
      
        let changer = document.querySelector(".content-change")
        changer.style.display = "block"

        let content01 = document.querySelector(".content-principal");
        let content02 = document.querySelector(".content-about");
        let content03 = document.querySelector(".content-services");
        let content04 = document.querySelector(".content-project");
        let content05 = document.querySelector(".content-choose-us");
        let background = document.querySelector(".content");
        let video = document.querySelector(".video-background");

        // change the logo src
        let logo = document.querySelector(".logo")

        //change color menu
        let line1 = document.querySelector(".line1")
        let line2 = document.querySelector(".line2")
        let line3 = document.querySelector(".line3")
       
        let musicColor = document.querySelectorAll(".music")

        setTimeout(()=>{
          musicColor.forEach(element => {
            element.style.backgroundColor ="black"
            
          });
            logo.src = "./jappfiction-high-resolution-logo-black-on-transparent-background.png"

            line1.style.backgroundColor = "black"
            line2.style.backgroundColor = "black"
            line3.style.backgroundColor = "black"

            background.style.backgroundColor = "rgb(255, 253, 250)"

            body.style.backgroundColor = "rgb(255, 253, 250)"

            video.style.opacity = 0;

        content01.style.display = "none"
        content02.style.display = "block"
        content03.style.display = "block"
        content04.style.display = "block"
        content05.style.display = "block"
        
        //text and title animation
// what is jappfiction

aboutAni = gsap.timeline()
document.querySelector(".service-title").style.opacity = 1

aboutAni.from(".first-about",{
    duration:0.5,
  
    transformOrigin:"left",
    opacity:0
})
aboutAni.from(".second-about",{
    duration:1,
  
    transformOrigin:"left",
    opacity:0
})
aboutAni.from(".third-about",{
    duration:1,
  
    transformOrigin:"left",
    opacity:0
})


ScrollTrigger.create({
    trigger:".about-title",
    start:"bottom 50%",
    animation:aboutAni,
    markers:true
})



        //service title
        titleServiceAni = gsap.timeline()
document.querySelector(".service-title").style.opacity = 1
titleServiceAni.from(".service-title",{
    duration:1.5,
    x:-150,
    transformOrigin:"left",
    opacity:0
})
ScrollTrigger.create({
    trigger:".service-title",
    start:"15% 50%",
    animation:titleServiceAni,
    markers:true
})
//-----
// first service
h2firstServiceAni = gsap.timeline()
document.querySelector(".h2-service").style.opacity = 1
h2firstServiceAni.from(".h2-service",{
    duration:1.5,
    x:-150,
    transformOrigin:"left",
    opacity:0
})
ScrollTrigger.create({
    trigger:".first-service",
    start:"-20% 45%",
    animation:h2firstServiceAni,
    markers:true
})
// img and p-service
imgPFirstServiceAni = gsap.timeline()
document.querySelector(".img-services-1").style.opacity = 1
document.querySelector(".p-service-1").style.opacity=1
imgPFirstServiceAni.add("go")
imgPFirstServiceAni.from(".img-services-1",{
    duration:1.5,
    y:150,
    transformOrigin:"bottom",
    opacity:0
},"go")
imgPFirstServiceAni.from(".p-service-1",{
    duration:1.5,
    y:150,
    transformOrigin:"bottom",
    opacity:0

},"go")
ScrollTrigger.create({
    trigger:".first-service",
    start:"5% 45%",
    animation:imgPFirstServiceAni,
    markers:true
})

        
// seconde service
h2SecondServiceAni = gsap.timeline()
document.querySelector(".h2-service2").style.opacity = 1
h2SecondServiceAni.from(".h2-service2",{
    duration:1.5,
    x:-150,
    transformOrigin:"left",
    opacity:0
})
ScrollTrigger.create({
    trigger:".second-service",
    start:"-20% 45%",
    animation:h2SecondServiceAni,
    markers:true
})
// img and p-service
imgPSecondServiceAni = gsap.timeline()
document.querySelector(".img-services").style.opacity = 1
document.querySelector(".p-service-2").style.opacity=1
imgPSecondServiceAni.add("go")
imgPSecondServiceAni.from(".img-services",{
    duration:1.5,
    y:150,
    transformOrigin:"bottom",
    opacity:0
},"go")
imgPSecondServiceAni.from(".p-service-2",{
    duration:1.5,
    y:150,
    transformOrigin:"bottom",
    opacity:0

},"go")
ScrollTrigger.create({
    trigger:".second-service",
    start:"5% 45%",
    animation:imgPSecondServiceAni,
    markers:true
})

        
// third service
h2SThirdServiceAni = gsap.timeline()
document.querySelector(".h2-service3").style.opacity = 1
h2SThirdServiceAni.from(".h2-service3",{
    duration:1.5,
    x:-150,
    transformOrigin:"left",
    opacity:0
})
ScrollTrigger.create({
    trigger:".third-service",
    start:"-20% 45%",
    animation:h2SThirdServiceAni,
    markers:true
})
// img and p-service
imgPThirdServiceAni = gsap.timeline()
document.querySelector(".img-services-3").style.opacity = 1
document.querySelector(".p-service-3").style.opacity=1
imgPThirdServiceAni.add("go")
imgPThirdServiceAni.from(".img-services-3",{
    duration:1.5,
    y:150,
    transformOrigin:"bottom",
    opacity:0
},"go")
imgPThirdServiceAni.from(".p-service-3",{
    duration:1.5,
    y:150,
    transformOrigin:"bottom",
    opacity:0

},"go")
ScrollTrigger.create({
    trigger:".third-service",
    start:"5% 45%",
    animation:imgPThirdServiceAni,
    markers:true
})

//second content
      //our project title
      titleProjectAni = gsap.timeline()
      document.querySelector(".project-title").style.opacity = 1
      titleProjectAni.from(".project-title",{
          duration:1.5,
          x:-150,
          transformOrigin:"left",
          opacity:0
      })
      ScrollTrigger.create({
          trigger:".project-title",
          start:"15% 50%",
          animation:titleProjectAni,
          markers:true
      })

      //project card animation
      projectCardAni = gsap.timeline()
      let projectCard = document.querySelectorAll(".project-card")
      projectCard.forEach(element => {
        element.style.opacity=1
      });
      projectCardAni.add("go")
      projectCardAni.from(".project-card",{
        duration:1,
        y:150,
        transformOrigin:"bottom",
        opacity:0,
        stagger:0.5
    },"go")
    
   
       
    ScrollTrigger.create({
        trigger:".project-title",
        start:"bottom 50%",
        animation:projectCardAni,
        markers:true
    })

    //why choose us content
      //why choose us title
      titlChooseAni = gsap.timeline()
      document.querySelector(".choose-us-title").style.opacity = 1
      titlChooseAni.from(".choose-us-title",{
          duration:1.5,
          x:-150,
          transformOrigin:"left",
          opacity:0
      })
      ScrollTrigger.create({
          trigger:".choose-us-title",
          start:"15% 50%",
          animation:titlChooseAni,
          markers:true
      })

      //choose info 1
      info1ChooseAni = gsap.timeline()
      info1ChooseAni.from(".choose-us-h2",{
        duration:1,
        y:150,
        transformOrigin:"bottom",
        opacity:0
    })
    info1ChooseAni.from(".choose-us-p",{
        duration:1,
        y:150,
        transformOrigin:"bottom",
        opacity:0,
        stagger:0.2
    })
    ScrollTrigger.create({
        trigger:".choose-us-info-1",
        start:"top 50%",
        animation: info1ChooseAni,
        markers:true
    })
    //choose info 2
    info2ChooseAni = gsap.timeline()
    info2ChooseAni.from(".choose-us-h2-2",{
      duration:1,
      y:150,
      transformOrigin:"bottom",
      opacity:0
  })
  info2ChooseAni.from(".choose-us-p-2",{
      duration:1,
      y:150,
      transformOrigin:"bottom",
      opacity:0,
      stagger:0.2
  })
  
  ScrollTrigger.create({
      trigger:".choose-us-info-2",
      start:"top 50%",
      animation: info2ChooseAni,
      markers:true
  })
    //choose info 3
    info3ChooseAni = gsap.timeline()
    info3ChooseAni.from(".choose-us-h2-3",{
      duration:1,
      y:150,
      transformOrigin:"bottom",
      opacity:0
  })
  info3ChooseAni.from(".choose-us-p-3",{
      duration:1,
      y:150,
      transformOrigin:"bottom",
      opacity:0,
      stagger:0.2
  })
  
  ScrollTrigger.create({
      trigger:".choose-us-info-3",
      start:"top 50%",
      animation: info3ChooseAni,
      markers:true
  })
    //choose info 4
    info4ChooseAni = gsap.timeline()
    info4ChooseAni.from(".choose-us-h2-4",{
      duration:1,
      y:150,
      transformOrigin:"bottom",
      opacity:0
  })
  info4ChooseAni.from(".choose-us-p-4",{
      duration:1,
      y:150,
      transformOrigin:"bottom",
      opacity:0,
      stagger:0.2
  })
  
  ScrollTrigger.create({
      trigger:".choose-us-info-4",
      start:"top 50%",
      animation: info4ChooseAni,
      markers:true
  })
    //choose info 5
    info5ChooseAni = gsap.timeline()
    info5ChooseAni.from(".final-title",{
      duration:1,
      y:150,
      transformOrigin:"bottom",
      opacity:0
  })
 
  
  ScrollTrigger.create({
      trigger:".choose-us-info-5",
      start:"top 50%",
      animation: info5ChooseAni,
      markers:true
  })
        



// background animation and menu music et logo


ScrollTrigger.create({
    trigger: ".content-services",
    start:"top 50%",
    end:'bottom 50%',
    markers:{
        color:"blue"
    },
    onEnter: ()=>{
        let background = gsap.timeline();
        background.add("start")
        background.to(".content-services",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        background.to(".content-about",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
        // change logo and menu
        background.to(".logo",{
          fonc:()=>{
            //logo
            let logo = document.querySelector(".logo")
            logo.src = "./logoWhiteTrans.png"

            //MENU
        let line1 = document.querySelector(".line1")
         let line2 = document.querySelector(".line2")
         let line3 = document.querySelector(".line3")

         line1.style.backgroundColor = "#fff"
         line2.style.backgroundColor = "#fff"
         line3.style.backgroundColor = "#fff"
          }
        },"start")
    
    },
    onLeave: () =>{ 
        let background = gsap.timeline();
        background.add("start")
        background.to(".content-services",{
            backgroundColor:"white"  
        },"start")
        background.to(".content-about",{
            backgroundColor:"white"
        },"start")
        background.to(".logo",{
            fonc:()=>{
              let logo = document.querySelector(".logo")
              logo.src = "./jappfiction-high-resolution-logo-black-on-transparent-background.png"

        //MENU
        let line1 = document.querySelector(".line1")
         let line2 = document.querySelector(".line2")
         let line3 = document.querySelector(".line3")

         line1.style.backgroundColor = "rgb(14, 17, 17)"
         line2.style.backgroundColor = "rgb(14, 17, 17)"
         line3.style.backgroundColor = "rgb(14, 17, 17)"
            }
          },"start")
        
    }, 
    onLeaveBack: () => { 
        let background = gsap.timeline();
        background.add("start")
        background.to(".content-services",{
            backgroundColor:"white"  
        },"start")
        background.to(".content-about",{
            backgroundColor:"white"
        },"start")
        background.to(".logo",{
            fonc:()=>{
              let logo = document.querySelector(".logo")
              logo.src = "./jappfiction-high-resolution-logo-black-on-transparent-background.png"

              //MENU
        let line1 = document.querySelector(".line1")
        let line2 = document.querySelector(".line2")
        let line3 = document.querySelector(".line3")

        line1.style.backgroundColor = "rgb(14, 17, 17)"
        line2.style.backgroundColor = "rgb(14, 17, 17)"
        line3.style.backgroundColor = "rgb(14, 17, 17)"
              
            }
          },"start")
        
    },  
    onEnterBack: () => {
        let background = gsap.timeline();
        background.add("start")
        background.to(".content-services",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        background.to(".content-about",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
        background.to(".logo",{
            fonc:()=>{
              let logo = document.querySelector(".logo")
              logo.src = "./logoWhiteTrans.png"

               //MENU
        let line1 = document.querySelector(".line1")
        let line2 = document.querySelector(".line2")
        let line3 = document.querySelector(".line3")

        line1.style.backgroundColor = "#fff"
        line2.style.backgroundColor = "#fff"
        line3.style.backgroundColor = "#fff"
            }
          },"start")
    
    }, 
})

ScrollTrigger.create({
    trigger: ".content-project",
    start:"top 50%",
    end:'bottom 50%',
    markers:true,
    onEnter: ()=>{
        let background = gsap.timeline();
        background.add("start")
        

        background.to(".content-project",{
            backgroundColor:"white"  
        },"start")
        background.to(".content-choose-us",{
            backgroundColor:"white"
        },"start")
        background.to(".logo",{
            fonc:()=>{
              let logo = document.querySelector(".logo")
              logo.src = "./jappfiction-high-resolution-logo-black-on-transparent-background.png"

               //MENU
        let line1 = document.querySelector(".line1")
        let line2 = document.querySelector(".line2")
        let line3 = document.querySelector(".line3")

        line1.style.backgroundColor = "rgb(14, 17, 17)"
        line2.style.backgroundColor = "rgb(14, 17, 17)"
        line3.style.backgroundColor = "rgb(14, 17, 17)"
            }
          },"start")
    
    },
    onLeave: () =>{ 
        let background = gsap.timeline();
        background.add("start")
        background.to(".content-project",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        background.to(".content-choose-us",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
        background.to(".logo",{
            fonc:()=>{
              let logo = document.querySelector(".logo")
              logo.src = "./logoWhiteTrans.png"

               //MENU
        let line1 = document.querySelector(".line1")
        let line2 = document.querySelector(".line2")
        let line3 = document.querySelector(".line3")

        line1.style.backgroundColor = "#fff"
        line2.style.backgroundColor = "#fff"
        line3.style.backgroundColor = "#fff"
            }
          },"start")
       
    }, 
    onLeaveBack: () => { 
        let background = gsap.timeline();
        background.add("start")
      
        background.to(".content-project",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        background.to(".content-choose-us",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
        background.to(".logo",{
            fonc:()=>{
              let logo = document.querySelector(".logo")
              logo.src = "./logoWhiteTrans.png"

               //MENU
        let line1 = document.querySelector(".line1")
        let line2 = document.querySelector(".line2")
        let line3 = document.querySelector(".line3")

        line1.style.backgroundColor = "#fff"
        line2.style.backgroundColor = "#fff"
        line3.style.backgroundColor = "#fff"
            }
          },"start")
    },  
    onEnterBack: () => {
        let background = gsap.timeline();
        background.add("start")
        background.to(".content-project",{
            backgroundColor:"white"  
        },"start")
        background.to(".content-choose-us",{
            backgroundColor:"white"
        },"start")
        background.to(".logo",{
            fonc:()=>{
              let logo = document.querySelector(".logo")
              logo.src = "./jappfiction-high-resolution-logo-black-on-transparent-background.png"

                 //MENU
        let line1 = document.querySelector(".line1")
        let line2 = document.querySelector(".line2")
        let line3 = document.querySelector(".line3")

        line1.style.backgroundColor = "rgb(14, 17, 17)"
        line2.style.backgroundColor = "rgb(14, 17, 17)"
        line3.style.backgroundColor = "rgb(14, 17, 17)"
              
            }
          },"start")
        
    
    }, 
})

// backanimation fin

        
        
        },2000)

        setTimeout(() =>{
           // content about
           document.querySelector(".about-title").style.opacity = 1
    change3.from(".about-title",{
    duration :2,
    transformOrigin:"right",
    opacity :0,
    x:-150
    })
        },3000)

        //
        
      

        
    },
    onLeaveBack: ()=>{

         // stop user to scroll during transition
         let body = document.querySelector("body") 
         body.style.overflowY = "hidden"
         setTimeout(() => {
             body.style.overflowY = "auto"
         }, 3000);
         
        let changer = document.querySelector(".content-change")
        changer.style.display = "block"

        let content01 = document.querySelector(".content-principal");
        let content02 = document.querySelector(".content-about");
        let content03 = document.querySelector(".content-services");
        let content04 = document.querySelector(".content-project");
        let content05 = document.querySelector(".content-choose-us");
        let background = document.querySelector(".content");
        let video = document.querySelector(".video-background");
        let logo = document.querySelector(".logo")
         //change color menu
         let line1 = document.querySelector(".line1")
         let line2 = document.querySelector(".line2")
         let line3 = document.querySelector(".line3")

        setTimeout(()=>{
            logo.src = "./logoWhiteTrans.png"

            line1.style.backgroundColor = "#fff"
            line2.style.backgroundColor = "#fff"
            line3.style.backgroundColor = "#fff"

            background.style.backgroundColor = "inherit"
            body.style.backgroundColor = "black"
            video.style.opacity = 1;
        content01.style.display ="flex" 
        content02.style.display = "none"
        content03.style.display = "none"
        content04.style.display = "none"
        content05.style.display = "none"
        },2000)

      

        
    },
   
   
})

//page animation
ScrollTrigger.create({
    trigger:".content",
    start: "95% 89%",
    end: "110% 94%",
    toggleActions:"play none none reverse",
    markers:true,
   
    animation:change2,
    onEnter: ()=>{
        // stop user to scroll during transition
      
        
      
        let changer = document.querySelector(".content-change2")
        changer.style.display = "block"
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF

      

        
    },
    onLeaveBack: ()=>{

        // stop user to scroll during transition
       
        
       let changer = document.querySelector(".content-change2")
       changer.style.display = "block"

     

     
       
   }
});

// text display animation

ScrollTrigger.create({

})


// title and texte animation gsap
//LE METTRE AILLEUR
/*
ScrollTrigger.create({
    trigger:".service-title",
    start:"15% 50%",
    onEnter:()=>{
        
titleServiceAni = gsap.timeline()
document.querySelector(".service-title").style.opacity = 1
titleServiceAni.from(".service-title",{
    duration:1,
    x:-150,
    transformOrigin:"left",
    opacity:0
})

    },
    markers:true
})
*/