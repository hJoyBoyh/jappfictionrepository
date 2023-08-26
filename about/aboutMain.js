let titleAbout = document.querySelector(".about-us-title")
// clone about us title
/*
let copyTitle = titleAbout.cloneNode(true)
let content = document.querySelector("#content")
let count =3;
for (let index = 0; index < count; index++) {
    const element = content;
    element.append(copyTitle)
    
}
*/


let titleAbout2 = document.querySelectorAll(".about-us-title")

let carrouselTitle = gsap.timeline()
carrouselTitle
.to(titleAbout2,{
    duration : 7,
    x:"-100%",
    repeat:-1,
    ease:Linear.easeIn
})

let tl = gsap.timeline()

tl.from(".ligne-vertical",{
    duration :2,
    scaleY :0,
    transformOrigin:"top",
    repeat:-1
})


