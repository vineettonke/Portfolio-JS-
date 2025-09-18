const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 

function heroPageAnimation(){
    var tl = gsap.timeline();

    tl.from("#navbar", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 1,
            delay: -.5,
            stagger: .2
        })
        .from("#herofooter", {
            y: '-10',
            opacity: 0,
            duration: 1,
            delay: -.5,
            ease: Expo.easeInOut
        })
}

function circleflat(){
    window.addEventListener("mousemove", function(dets){
        
    })
}

function circleCursor(){
    window.addEventListener("mousemove", function(dets){
        console.log(dets);
        document.querySelector("#circle-cursor").style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px)`
    })
}

circleCursor();
heroPageAnimation();