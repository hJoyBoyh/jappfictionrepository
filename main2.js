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