$(document).ready(function () {
  
    // screen scroll 
 $(window).scroll(function () { 

    var VTW = window.pageYOffset 
    VT2 = $('.section-2').offset().top - 128;
    VT3 = $('.section-3').offset().top - 128;
    VT4 = $('.section-4').offset().top - 128 ;
    VT5 = $('.section-6').offset().top - 128  ;

    if (VTW >= 150) {
        $('nav').addClass('active');
        $('.navcontent').addClass('active-2');
    } else {
        $('nav').removeClass('active');
        $('.navcontent').removeClass('active-2');
    } 

    if (VTW < VT2) {
        $('.click1').removeClass('active-3');
    }

    if ((VTW >= VT2) && (VTW < VT3)) {
        $('.click1').removeClass('active-3');
    $('.one').addClass('active-3');
    } 

    if ((VTW >=VT3) && (VTW <VT4)) {
        $('.click1').removeClass('active-3');
        $('.two').addClass('active-3');
    }

    if ((VTW >=VT4) && (VTW <VT5)) {
        $('.click1').removeClass('active-3');
        $('.three').addClass('active-3');
    }

    if (VTW >= VT5) {
        $('.click1').removeClass('active-3');
        $('.four').addClass('active-3');
    }



 });

// click effect 
$('.one').click(function (e) { 
    e.preventDefault();

$('html').animate ({
    scrollTop: $('.section-2').offset().top 
},'slow');    

});

$('.two').click(function (e) { 
    e.preventDefault();

$('html').animate ({
    scrollTop: $('.section-3').offset().top 
},'slow');    

});

$('.three').click(function (e) { 
    e.preventDefault();

$('html').animate ({
    scrollTop: $('.section-4').offset().top 
},'slow');    

});

$('.four').click(function (e) { 
    e.preventDefault();

$('html').animate ({
    scrollTop: $('.section-6').offset().top 
},'slow');    

});

$('.orange-button').click(function (e) { 
    e.preventDefault();

$('html').animate ({
    scrollTop: $('.section-2').offset().top 
},'slow');    

});

$('.white-button').click(function (e) { 
    e.preventDefault();

$('html').animate ({
    scrollTop: $('.section-3').offset().top 
},'slow');    

});
 



});