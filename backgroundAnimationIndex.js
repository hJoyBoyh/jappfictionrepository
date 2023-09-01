




ScrollTrigger.create({
    trigger: ".content-services",
    start:"top 50%",
    end:'bottom 50%',
    markers:{
        color:"blue"},
    onEnter: ()=>{
        let back = gsap.timeline();
        back.add("start")
        back.to(".content-services",{
            backgroundColor:"#0e1111"  
        },"start")
        back.to(".content-about",{
            backgroundColor:"#0e1111"
        },"start")
    
    },
    onLeave: () =>{ 
        let back = gsap.timeline();
        back.add("start")
        back.to(".content-services",{
            backgroundColor:"white"  
        },"start")
        back.to(".content-about",{
            backgroundColor:"white"
        },"start")
    }, 
})
