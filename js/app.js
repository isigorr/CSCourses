gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.body',
        content: '.contents',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.header', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header',
            start: 'top',
            end: 'center',
            scrub: true
        }
    })

    gsap.fromTo('.home-content-left', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.home-content-left',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.home-img', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.home-img',
            start: 'top',
            end: '500',
            scrub: true
        }
    })

    gsap.fromTo('#text1', {x: -75, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.home-img',
            start: '300',
            end: '900',
            scrub: true
        }
    })
    gsap.fromTo('#img1', {x: 75, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.home-img',
            start: '100',
            end: '900',
            scrub: true
        }
    })

    gsap.fromTo('.cons1', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.cons1',
            start: '100',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.cons-text2', {x: 150, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '#img1',
            start: 'top',
            end: '2000',
            scrub: true
        }
    })
    gsap.fromTo('.cons-img1', {x: -150, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '#img1',
            start: 'top',
            end: '2000',
            scrub: true
        }
    })
    gsap.fromTo('.cons2', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.cons-img1',
            start: 'top',
            end: 'center',
            scrub: true
        }
    })
    gsap.fromTo('#text3', {x: -75, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.cons-img1',
            start: '300',
            end: '700',
            scrub: true
        }
    })
    gsap.fromTo('#img3', {x: 150, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.cons-img1',
            start: '100',
            end: '1600',
            scrub: true
        }
    })

    gsap.fromTo('.cons3', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.cons3',
            start: '100',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.courses', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.cons3',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })

    gsap.fromTo('.course1', {x: -100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.cons3',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.course2', {y: 150, opacity: 0}, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.cons3',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.course3', {x: 100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.cons3',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    })
    
    gsap.fromTo('.courses', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.courses',
            start: '-100',
            end: '600',
            scrub: true
        }
    })

    gsap.fromTo('.freecourse', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.courses',
            start: '100',
            end: '800',
            scrub: true
        }
    })
    gsap.fromTo('.text-form', {x: -75, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.courses',
            start: '100',
            end: '800',
            scrub: true
        }
    })
    gsap.fromTo('.form-section', {x: 75, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.courses',
            start: '100',
            end: '800',
            scrub: true
        }
    })
    gsap.fromTo('.freecourse', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.courses',
            start: '1400',
            end: '2000',
            scrub: true
        }
    })

    gsap.fromTo('.about-us', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.freecourse',
            start: '-100',
            end: '800',
            scrub: true
        }
    })
    gsap.fromTo('.about1', {x: -100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.freecourse',
            start: '-400',
            end: '500',
            scrub: true
        }
    })
    gsap.fromTo('.about2', {x: 100, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.freecourse',
            start: '-500',
            end: '500',
            scrub: true
        }
    })
}

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});
