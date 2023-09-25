
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoAnimation(){

    var videocon = document.querySelector("#video-container")
    
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter",()=>{
        gsap.to(playbtn,{
    scale:1,
    opacity:1
})
})
videocon.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
      })
    })
videocon.addEventListener("mousemove",(dets)=>{
    gsap.to(playbtn,{
       left:dets.x-50,
       top:dets.y-50
      })
})

}
videoAnimation()

function loadingAnimation(){

    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stragger:0.3  
    })
    
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
    })
}
loadingAnimation()

document.addEventListener("mousemove",(dets)=>{
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
})

document.querySelectorAll(".child").forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{

        gsap.to("#cursor",{
            
                transform: 'translate(-50%,-50%) scale(1) '
            
            })
        })
        elem.addEventListener("mouseleave",()=>{

            gsap.to("#cursor",{
                
                    transform: 'translate(-50%,-50%) scale(0) '
                
      })
            })
})






