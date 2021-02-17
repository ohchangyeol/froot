$(document).ready(function () {
    $('.mainMockupImg').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,  
        autoplaySpeed: 600,
        easing: 'linear',
        arrows:false,
        fade: true,
        swipe: true,
    })
    $('.imgSlideBox .img1Slide').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,  
        autoplaySpeed: 500,
        easing: 'linear',
        arrows:false,
        fade: false,
        pauseOnHover: true, 
        swipe: true,
        opacity : 0.5,

    });
});