gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    gsap.fromTo('.start1', {opacity: 1, x: 0}, {
        opacity: 0, x: -500,
        scrollTrigger: {
            trigger: '.start1',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.start2', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.start2',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.start3', {opacity: 1, x: 0}, {
        opacity: 0, x: 500,
        scrollTrigger: {
            trigger: '.start3',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.imgS4', {opacity: 1, x: 0}, {
        opacity: 0, x: -500,
        scrollTrigger: {
            trigger: '.start4',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.ptext2', {opacity: 1, x: 0}, {
        opacity: 0, x: 500,
        scrollTrigger: {
            trigger: '.start4',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.start5', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.start5',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.start6', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.start6',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.start7', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.start7',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
}

ScrollTrigger.create({
    trigger: ".scrll",
    pin: true,
    start: "center center",
    end: "+=700"
});

ScrollTrigger.create({
    trigger: ".downarrow",
    pin: true,
    start: "center center",
    end: "+=6000"
});

const bcgWidth = document.querySelector(".background")
const races = document.querySelector(".races");
let racesWidth = races.offsetWidth * 1.25;
let amountToScroll = racesWidth - window.innerWidth;

const tween = gsap. to(races, {
    x: -amountToScroll,
    duration: 3,
    ease: "none"
});
    
ScrollTrigger. create({
    trigger:".racesWrapper",
    start:"top -10%",
    end:"+=" + amountToScroll,
    pin:true,
    animation: tween,
    scrub:1
})