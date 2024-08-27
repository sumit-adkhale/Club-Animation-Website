const cursor=document.querySelector('#cursor')
const cursorblur=document.querySelector('#cursorblur')
document.addEventListener("mousemove",function(e){
    cursorblur.style.left=e.x-200+"px"
    cursorblur.style.top=e.y-200+"px"
    cursor.style.left=e.x-7+"px"
    cursor.style.top=e.y+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:'80px',
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us-in",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})

gsap.from("#colon2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 75%",
        end:"top 75%",
        scrub:3
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})