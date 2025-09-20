// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function heroPageAnimation() {
    let tl = gsap.timeline();

    tl.from("#navbar", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut"
    })
    .to(".boundingelem", {
        y: 0,
        ease: "expo.inOut",
        duration: 1,
        delay: -0.5,
        stagger: 0.2
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1,
        delay: -0.5,
        ease: "expo.inOut"
    });
}

function customCursor() {
    const cursor = document.querySelector("#circle-cursor");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let scaleX = 1, scaleY = 1;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = "1"; 
    });

    function animate() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;

        let dx = mouseX - cursorX;
        let dy = mouseY - cursorY;

        scaleX = gsap.utils.clamp(0.8, 1.2, 1 + dx * 0.01);
        scaleY = gsap.utils.clamp(0.8, 1.2, 1 + dy * 0.01);

        cursor.style.transform = `translate(${cursorX - 5}px, ${cursorY - 5}px) scale(${scaleX}, ${scaleY})`;

        requestAnimationFrame(animate);
    }
    animate();

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");
    hoverTargets.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.style.transform += " scale(1.5)";
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.transform = cursor.style.transform.replace(" scale(1.5)", "");
        });
    });
}

// Run animations & cursor
customCursor();
heroPageAnimation();
