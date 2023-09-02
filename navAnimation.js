function myFunction(x) {
    x.classList.toggle("change");
  }

  function disabledMenuBtn(){
    setTimeout(() => {
        document.querySelector("#menu").style.pointerEvents = "none";
    }, 1000);
   
      
    
  }
  
  function enableMenuBtn(){
   
    document.querySelector("#menu").style.pointerEvents = "auto";
 
 
 
}

  
//menu
let menuTransition = document.querySelector(".menu-transition")
let menuTransition2 = document.querySelector(".menu-transition2")

let menu = document.querySelector("#menu")
let menuCount = false

menu.addEventListener("click",()=>{
    if(menuCount === false){

        disabledMenuBtn()
    let timelienMenu = gsap.timeline();
    let timelienMenu2 = gsap.timeline();

    menuTransition.style.display = "block"
    menuTransition2.style.display = "flex"

    //set nav to the top page
    let nav = document.querySelector("nav")
    nav.style.top ="0%"

      
    timelienMenu.from(".menu-transition",{
        duration :1,  
        scaleX :0,
        transformOrigin:"right",
    })
    timelienMenu2.from(".menu-transition2",{
        duration :1.5,  
        scaleX :0,
        transformOrigin:"right",
    })
    timelienMenu2.to(".navigation",{
        duration:0.5,
        opacity:1,
    })
    timelienMenu2.from(".li-nav",{
        duration:0.5,
        opacity:0,
        x:150,
        stagger:0.2,
        fonc:()=>{
           enableMenuBtn()
        }
    })
    timelienMenu2.from(".objet-afficher",{
        duration:0.5,
        opacity:0
    })

    menuCount = true;

    let liNavAnimation = document.querySelectorAll(".li-nav a")
    

    liNavAnimation.forEach((element,idx) => {
        console.log(element)
        
        element.addEventListener("mouseover", ()=>{
            console.log("haha")
            spanAni = gsap.timeline({})

            spanAni.to(`.menu-letter-hover-${idx}`,{
                duration:0.5,
                color: "rgb(0, 0, 0)",
                fontSize:60,
                stagger : 0.2
                
            })
           
        })
    });
    liNavAnimation.forEach((element,idx) => {
        console.log(element)
    element.addEventListener("mouseout",()=>{
        spanAni = gsap.timeline()

        spanAni.to(`.menu-letter-hover-${idx}`,{
            duration:0.5,
            color: "rgb(255, 255, 255)",
            
            stagger : 0.2
            
        })

    })
    
    
});
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
        duration:0.5,
        opacity:0,
    })
    timelienMenu2.to(".img-menu",{
        duration:1.5,
        x:300
    })
    timelienMenu2.from(".menu-transition2",{
        opacity:1,
        duration:1   
   })
    
    timelienMenu2.to(".menu-transition2",{
         opacity:0,
         duration:0.5   
    })
   
    timelienMenu.to(".menu-transition",{
           
        opacity:0,
        duration:0.5   
    })
    timelienMenu2.to(".img-menu",{
        duration:0.1,
        x:0
    })

    
   
   
   

    setTimeout(()=>{
        menuTransition.style.display = "none"
        menuTransition.style.opacity = 1
        menuTransition2.style.opacity = 1
        

        menuTransition2.style.display = "none"
       
        

    },7000)

    menuCount = false;
}
})