$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header.container-fluid').addClass("sticky");
    	$('.navbar-brand').addClass("sticky");
  }
  else{
    $('header.container-fluid').removeClass("sticky");
    	$('.navbar-brand').removeClass("sticky");
  }
});

$(".fa-bars").click(function(){
    $(".dropdown-menu.col-xs-12").slideToggle("slow");
});


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* Anything that gets to the document
   will hide the dropdown */
$(document).click(function(){
  $(".navbar-collapse.collapse.in").toggle('slow');
});

