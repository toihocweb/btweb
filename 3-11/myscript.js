$(document).ready(function () {
    $(window).resize(function () { 
       w = $(window).width();
       if (w > 768 && $('.navbar').is(':hidden')){
           $('.navbar').removeAttr('style');
       }
    });
   $('.open').click(function (e) { 
       e.preventDefault();
       $('.navbar').fadeIn().css('display','flex');
   });
   $('.close').click(function (e) { 
    e.preventDefault();
    $('.navbar').fadeOut();
});
});