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
        content02.style.display = "flex"
        content03.style.display = "block"
        content04.style.display = "block"
        content05.style.display = "block"
        
        
        },2000)

        setTimeout(() =>{
           // content about
    change3.to(".about-title",{
    duration :4,
    opacity :1
    })
        },5000)

      

        
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
})
/*
  let content01 = document.querySelector(".content01");
            let content02 = document.querySelector(".content02");
    
          
            content01.style.display = "none"
            content02.style.display = ""
*/

// backward

/*

tl2.to(".change",{
   
   
    duration :1.5,
    scaleX :100,
    transformOrigin:"left",
  
    
        
})
.to(".change",{
    duration:1
})
.to(".change",{
   
   
    duration :1.5,
    scaleX :0,
    transformOrigin:"left",
  
    
        
})

ScrollTrigger.create({
    trigger:".content01",
    start: "90% 89%",
   
    toggleActions:"none none none play",
    markers: true,
    animation:tl2,
    onEnter: ()=>{
        let changer = document.querySelector(".change")
        changer.style.display = "block"

        let content01 = document.querySelector(".content01");
        let content02 = document.querySelector(".content02");

        setTimeout(()=>{
            
        content01.style.display = "flex"
        content02.style.display = "none"
        },2000)

      

        
    },
   
   
})
*/