
const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        grabCursor:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
const cursor=document.querySelector('.cursor');
const main=document.querySelector('.main');
document.addEventListener("mousemove",function(prop){
   cursor.style.left=(prop.x-100)+"px";
   cursor.style.top=(prop.y-100)+"px";
})
