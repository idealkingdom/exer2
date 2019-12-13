$(function() {
	
	$('.owl-carousel').owlCarousel({
	mouseDrag:true,
	touchDrag:true,
	center: true,
    loop:false,
    margin:16,
    dots:false,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
}) 	 	




});