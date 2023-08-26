function myFunction(x) {
    x.classList.toggle("change");
  }


  
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
    timelienMenu2.from(".li-nav",{
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
   
  


    timelienMenu2.to(".li-nav",{
        duration:0.5,
        opacity:0,
        x:150,
        stagger:0.2,
        fonc:()=>{
            setTimeout(()=>{
                let li = document.querySelectorAll(".li-nav")
                li.forEach((elem)=>{
                    elem.style.opacity = 1;
                    
                })
                gsap.to(".li-nav",{
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