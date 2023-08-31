




ScrollTrigger.create({
    trigger: ".content-services",
    start:"top 50%",
    end:'bottom 50%',
    markers:{
        color:"blue"},
    onEnter: ()=>{
        let tl = gsap.timeline();
        tl.add("start")
        tl.to(".content-services",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        tl.to(".content-about",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
    
    },
    onLeave: () =>{ 
        let tl = gsap.timeline();
        tl.add("start")
        tl.to(".content-services",{
            backgroundColor:"white"  
        },"start")
        tl.to(".content-about",{
            backgroundColor:"white"
        },"start")
    }, 
    onLeaveBack: () => { 
        let tl = gsap.timeline();
        tl.add("start")
        tl.to(".content-services",{
            backgroundColor:"white"  
        },"start")
        tl.to(".content-about",{
            backgroundColor:"white"
        },"start")
    },  
    onEnterBack: () => {
        let tl = gsap.timeline();
        tl.add("start")
        tl.to(".content-services",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        tl.to(".content-about",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
    
    }, 
})

ScrollTrigger.create({
    trigger: ".content-project",
    start:"top 50%",
    end:'bottom 50%',
    markers:true,
    onEnter: ()=>{
        let tl = gsap.timeline();
        tl.add("start")
        

        tl.to(".content-project",{
            backgroundColor:"white"  
        },"start")
        tl.to(".content-choose-us",{
            backgroundColor:"white"
        },"start")
    
    },
    onLeave: () =>{ 
        let tl = gsap.timeline();
        tl.add("start")
        tl.to(".content-project",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        tl.to(".content-choose-us",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
       
    }, 
    onLeaveBack: () => { 
        let tl = gsap.timeline();
        tl.add("start")
      
        tl.to(".content-project",{
            backgroundColor:"rgb(14, 17, 17)"  
        },"start")
        tl.to(".content-choose-us",{
            backgroundColor:"rgb(14, 17, 17)"
        },"start")
    },  
    onEnterBack: () => {
        let tl = gsap.timeline();
        tl.add("start")
        tl.to(".content-project",{
            backgroundColor:"white"  
        },"start")
        tl.to(".content-choose-us",{
            backgroundColor:"white"
        },"start")
    
    }, 
})