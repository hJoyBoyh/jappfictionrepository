let tl = gsap.timeline();
let lt = gsap.timeline()
window.scrollTo(0,0); 

//intro

// block the scroll
let body = document.querySelector("body")
let html = document.querySelector("html")

//scroll to 0 when page reset
document.body.scrollTop = 0;



tl.from('.title-1',{
    
    duration:2,
    opacity: 0,
    scale:0.1, 
   ease:"power1.out",
   fonc:()=>{
    
   }
 
})



tl.from('.title',{
    duration:0.4,
    opacity: 0,
    x: 150, 
    stagger:0.08,
})

let fadeOut;
//tittle web agency
tl.from('.title-2,.second-title',{
    duration:1,
    opacity:0,
    stagger: 0.1,
   
})
tl.to('.first-title,.second-title',{
    duration:2,
    opacity:0,
  
})
tl.to('.first-title,.second-title',{
    fadeOut:()=>{
        let s= document.querySelector(".second-title")
        let f = document.querySelector(".first-title")
        let sound = document.querySelector(".sound")
        s.style.display = "none"
        f.style.display = "none"
        

       


       
    }
     }
)



//language selection
let langage;

tl.to(".langage-selection",{
    langage: ()=>{
       let langue = document.querySelector(".langage-selection")
       langue.style.display = "block"
    }
})
tl.from(".langage-selection,.langue-choix,choix",{
        duration :1.5,
        opacity:0.1,
        y : 150,
        stagger: 0.5
})

//button selection
let button = document.querySelectorAll(".choix")
let switchMusic = true;
button.forEach(element => {
    element.addEventListener("click",()=>{
        tl.to(".langage-selection,.langue-choix,choix",{
            duration :2,
            opacity:0,
            y : 150,
            stagger: 0.5,
            music: () =>{

                // enable the scroll
                setTimeout(()=>{
                    body.style.overflowY = "auto"
                },15000)
              
                 
        // insert the audio in site

        let cont = document.getElementById("container")
        
        var source = "./spaceCalm.mp3"
        var audio = document.createElement("audio");
       
        audio.autoplay = true;
        audio.loop = true;
       
        audio.load()
        audio.addEventListener("load", function() { 
            audio.play(); 
        }, true);
        audio.src = source;

        // icon music controller
     
        let musicdiv = document.querySelector(".music-icon-container");
        let musicwave = document.querySelector(".music-wave")
        let speakerIcon = document.querySelector(".speaker");


         function muteMe(elem) {
         elem.muted = true;
         elem.pause();
         }
         function unmuteMe(elem) {
             elem.muted = false;
             elem.play();
             }



        musicdiv.addEventListener("click", () => {
        if(switchMusic){
            
            musicwave.style.display ="none";
            speakerIcon.style.display = "block"

            document.querySelectorAll("audio").forEach((elem) => muteMe(elem));

            switchMusic = false;
        }
        else{
            
            musicwave.style.display = "block";
            speakerIcon.style.display = "none"

             document.querySelectorAll("audio").forEach((elem) => unmuteMe(elem));

            switchMusic = true;
        }
        
        }
        )

      

        cont.append(audio)
            }
            

            
    }
   
    )
    // show background video 
    

    tl.to(".video-background",{
        opacity:1,
        duration:2,
        background: () =>{
            let container = document.getElementById("container")
            let body = document.querySelector(".body")
            let video = document.querySelector(".video-background")
            video.style.display = "block"
            video.autoplay = true;
            video.play()
            body.style.backgroundColor = "none"
            container.style.backgroundColor = "transparent"
            container.style.display = "block"

            let langueChoisi = document.querySelector(".langage-selection")
            langueChoisi.style.display = "none"
            
           
          
        }
    })
    let showContent;
    tl.to(".content",{
        opacity:1,
        duration :0.5,  
             
         showContent: ()=>{
            let content = document.querySelector(".content")
            content.style.display= "block"
            content.style.height = "100vh"
        }
    })
    tl.from(".main-title",{
        duration :0.8,
       y:-150,
        opacity:0,
        
        stagger:0.07
    })
    tl.to(".logo",{
        duration :1,
       
        opacity:1,
        
    })
    tl.to(".menu-titre",{
        duration :1,
       
        opacity:1,
        
    })
    
    tl.from(".linee-vertical",{
        transformOrigin: "top",
        duration :1.5,
        scaleY:0,
        
    })
    tl.to(".arrowSetting",{
        duration :1,
       
        opacity:1,
        repeat:-1
    })
    tl.to(".scroll",{
        duration :0.5,
       
        opacity:1,
        stagger:0.1,
       
    })
  


    })

    
});





//circle animation
lt.to('.circle',{
    duration: 1,
    scale:10,
    opacity:0,
    borderWidth: 1,
    ease:"power.out",
    x:12

})
lt.to(
    '.circle',{
        duration: 1,
        scale:1,
        opacity:0,
        borderWidth: 0,
        ease:"power.out"
    
    }
)


//end of intro

//menu
let menuTransition = document.querySelector(".menu-transition")
let menuTransition2 = document.querySelector(".menu-transition2")

let menu = document.querySelector(".menu")
let menuCount = false

menu.addEventListener("click",()=>{
    if(menuCount === false){

    let timelienMenu = gsap.timeline();
    let timelienMenu2 = gsap.timeline();

    menuTransition.style.display = "block"
    menuTransition2.style.display = "flex"

    //set nav to the top page
    let nav = document.querySelector("nav")
    nav.style.top ="0%"

      
    timelienMenu.from(".menu-transition",{
        duration :1.5,  
        scaleX :0,
        transformOrigin:"right",
    })
    timelienMenu2.from(".menu-transition2",{
        duration :2,  
        scaleX :0,
        transformOrigin:"right",
    })
    timelienMenu2.to(".navigation",{
        duration:1,
        opacity:1,
    })
    timelienMenu2.from("li",{
        duration:0.5,
        opacity:0,
        x:150,
        stagger:0.2,
        fonc:()=>{
           
        }
    })

    menuCount = true;
    
}
else{
    let timelienMenu = gsap.timeline();
    let timelienMenu2 = gsap.timeline();
   
  


    timelienMenu2.to("li",{
        duration:0.5,
        opacity:0,
        x:150,
        stagger:0.2,
        fonc:()=>{
            setTimeout(()=>{
                let li = document.querySelectorAll("li")
                li.forEach((elem)=>{
                    elem.style.opacity = 1;
                    
                })
                gsap.to("li",{
                    duration:0.1,
                    x:0
                })

            },3000)

        }
        
    })
    timelienMenu2.to(".navigation",{
        duration:1,
        opacity:0,
    })
    
    timelienMenu2.to(".menu-transition2",{
         opacity:0,
         duration:0.5   
    })
    timelienMenu.to(".menu-transition",{
           
        opacity:0,
        duration:0.5   
    })
    
   
   
   

    setTimeout(()=>{
        menuTransition.style.display = "none"
        menuTransition.style.opacity = 1
        menuTransition2.style.opacity = 1
        

        menuTransition2.style.display = "none"
       
        

    },3000)

    menuCount = false;
}
})