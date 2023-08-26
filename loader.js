paceOptions = {
    ajax : true,
    document : true,
    eventLag: false
}
Pace.on('done', () =>{
    let pre = document.querySelector(".preloader")
    let tl = gsap.timeline();

    tl.add("start")
    .to(".preloader-img",{
        duration:1,
        y:-30,
        opacity:0,
       
    },"start")
    .to(".pace",{
        duration:1,
        y:30,
        opacity:0
    },"start")
    tl.to(pre,{
        duration :1,
        opacity :0,
      
    })
    tl.to(pre,{
        duration :1,
       
        fonc: ()=>{
            
            pre.style.display = "none"
        }
    })
       // start other animation here
       if ( document.URL.includes("projet.html")){
           let tl = gsap.timeline()

           let menu = document.getElementById("menu")
           menu.style.opacity = 0

           let showText1 = document.querySelectorAll(".show-text-1")
           let showText2 = document.querySelectorAll(".show-text-2")
           
           showText1.forEach(element => {
            element.style.opacity = 0
           });
           showText2.forEach(element => {
            element.style.opacity = 0
           });
           

          document.querySelector(".logo").style.opacity = 0
          tl.add("go")
           tl.from("h1",{
            duration :2,
            x: 150
           },"go")
           tl.to(".logo",{
            duration:1,
            opacity:1
           })
           tl.to("#menu",{
            duration:1,
            opacity:1
           })
           tl.to(showText1,{
            duration:0.5,
            opacity:1
           })
           tl.to(showText2,{
            duration:0.5,
            opacity:1
           })
           tl.from(".li-categorie",{
            duration:1,
            opacity: 0,
            y: -150,
            stagger: 0.5 
           },"go")
       }
    

 
  
})