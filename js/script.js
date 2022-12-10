"use strict";

setTimeout(()=> {
    document.querySelector(".preloaderDiv").style.display = "none"
},3800)

// Custom cursor start
let cursor_round = document.querySelector(".cursor_round");
let cursor_point = document.querySelector(".cursor_point");
let portfolio_item = document.querySelectorAll(".portfolio_item");

window.addEventListener("mousemove", (e) => {
  cursor_round.setAttribute(
    "style",
    `left:${e.pageX - 15}px; top:${e.pageY - 15}px`
  );
  cursor_point.setAttribute(
    "style", 
    `left:${e.pageX}px; top:${e.pageY}px`);
  
});

function handleMouseEnter() {
  cursor_round.classList.add("big_mouse");
  cursor_point.classList.add("big_mouse");
}
function handleMouseLeave() {
  cursor_round.classList.remove("big_mouse");
  cursor_point.classList.remove("big_mouse");
}
portfolio_item.forEach((item) => {
  item.addEventListener("mouseenter", handleMouseEnter);
  item.addEventListener("mouseleave", handleMouseLeave);
})
// Custom cursor end

let navbar = document.querySelector("#navbar");
let back_to_top = document.querySelector(".back_to_top");
let portfolio_top_img = document.querySelector(".portfolio_top_img");
let blog_top_img = document.querySelector(".blog_top_img");
let blog_top_left = document.querySelector(".blog_top_left");
let service_top_img = document.querySelector(".service_top_img");

window.addEventListener ("scroll", function () {
    let scroll_value = Math.floor(window.scrollY);
    console.log(scroll_value);
    // console.log(Math.floor(scroll_value));
    if (scroll_value > 100) {
        navbar.classList.add("sticky");
        back_to_top.classList.add("show");
    } else {
        navbar.classList.remove("sticky");
        back_to_top.classList.remove("show");
    }
    if (scroll_value > 1661) {
        portfolio_top_img.classList.add("boom");
    } else {
        portfolio_top_img.classList.remove("sticky");
    }
    if (scroll_value > 3600) {
        service_top_img.classList.add("service");
    } else {
        service_top_img.classList.remove("sticky");
    }
    if (scroll_value > 6000) {
        blog_top_img.classList.add("blog");
    } else {
        blog_top_img.classList.remove("sticky");
    }
    if (scroll_value > 6300) {
        blog_top_left.classList.add("blog");
    } else {
        blog_top_left.classList.remove("sticky");
    }
})

AOS.init();

// Skill Progress bar

$(function () {
    

    $('#illustrator').barfiller({
        barColor: "#f75023",
    });
    $('#photoshop').barfiller({
        barColor: "#1cbe59",
    });
    $('#figma').barfiller({
        barColor: "#8067f0",
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Tilt js Start================
    $('.service_item').tilt({
        maxTilt: 5,
    });
    // testimonial slick slider js Start================
    $('.testimonial_slider').slick({
        arrows: false,
        autoplay: true,
        dots: true
    });
})
AOS.init();

// Masonry Filter gallery start
$('.portfolio_gallery').mixItUp({  
    
    selectors: {
        target: '.tile',
        filter: '.filter',
        sort: '.sort-btn'
    },
    
    animation: {
        animateResizeContainer: false,
        effects: 'fade scale'
    }
    
});

new VenoBox({
    selector: '.image-popup',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

new VenoBox({
    selector: '.youtube_play',
});
// Masonry Filter gallery end