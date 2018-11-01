$(document).ready(function () {
    navHeight = $('nav').offset().top;
    navHei = $('nav').innerHeight();
    $(window).scroll(function(){
        currentPos = $(window).scrollTop();
      
        if(currentPos >= navHeight +navHei){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
        }
    })
});