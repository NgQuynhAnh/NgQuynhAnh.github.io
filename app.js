$(document).ready(function () {
    
    $('.first').click(function (e) { 
        e.preventDefault();
       
        $('html').animate({
            scrollTop:$('header').offset().top
        },'slow', function(){
            $('.first').addClass('active');
        }); 
    });

    $('.second').click(function (e) { 
        e.preventDefault();
       
        $('html').animate({
            scrollTop:$('.section-1').offset().top
        },'slow', function(){
            $('.second').addClass('active');
            
        }); 
    });

    $('.third').click(function (e) { 
        e.preventDefault();
       
        $('html').animate({
            scrollTop:$('.section-2').offset().top
        },'slow', function(){
            $('.third').addClass('active');
            
        }); 
    });

    $('.fourth').click(function (e) { 
        e.preventDefault();
       
        $('html').animate({
            scrollTop:$('.section-3').offset().top
        },'slow', function(){
            $('.fourth').addClass('active');
            
        }); 
    });

    $('.fifth').click(function (e) { 
        e.preventDefault();
       
        $('html').animate({
            scrollTop:$('.section-4').offset().top
        },'slow', function(){
            $('.fifth').addClass('active');
            
        }); 
    });

    $('.sixth').click(function (e) { 
        e.preventDefault();
       
        $('html').animate({
            scrollTop:$('.section-5').offset().top
        },'slow', function(){
            $('.sixth').addClass('active');
            
        }); 
    });


    $('.seventh').click(function (e) { 
        e.preventDefault();
       
        $('html').animate({
            scrollTop:$('.section-6').offset().top
        },'slow', function(){
            $('.seventh').addClass('active');
            
        }); 
    });


    $(window).scroll(function () { 
        var VTW = window.pageYOffset; 
        // VTHeader = $('header').offset().top;
        VT1 = $('.section-1').offset().top - 69;
        VT2 = $('.section-2').offset().top - 69;
        VT3 = $('.section-3').offset().top - 69;
        VT4 = $('.section-4').offset().top - 69;
        VT5 = $('.section-5').offset().top - 69;
        VT6 = $('.section-6').offset().top - 69;

if (VTW < VT1) {
    $('.menu-1').removeClass('active')
    $('.first').addClass('active');
}

        if ((VTW >= VT1) && (VTW < VT2)) {
            $('.menu-1').removeClass('active');
            $('.second').addClass('active');
        }

        if ((VTW >= VT2) && (VTW < VT3)) {
            $('.menu-1').removeClass('active');
            $('.third').addClass('active');
        }

        if ((VTW >= VT3) && (VTW < VT4)) {
            $('.menu-1').removeClass('active');
            $('.fourth').addClass('active');
        }

        if ((VTW >= VT4) && (VTW < VT5)) {
            $('.menu-1').removeClass('active');
            $('.fifth').addClass('active');
        }

        if ((VTW >= VT5) && (VTW < VT6)) {
            $('.menu-1').removeClass('active');
            $('.sixth').addClass('active');
        }

        if (VTW > VT6) {
            $('.menu-1').removeClass('active');
            $('.seventh').addClass('active');
        }



    });
    
});