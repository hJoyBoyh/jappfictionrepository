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
           tl.from("h1",{
            duration :3,
            x: 150
           })
       }
    

 
  
})