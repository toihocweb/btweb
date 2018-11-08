$(document).ready(function () {
    // tra ve gia tri
    navToTop =  $('nav').offset().top 
    navHeight = $('nav').innerHeight();

    console.log(navHeight)


    
    $(window).scroll(function(){
        toTop = $(window).scrollTop()    
        if(toTop >= navToTop + navHeight){
           $('nav').addClass('fixed')
        }else{
            if(toTop < navToTop){
                $('nav').removeClass('fixed')
            }
            
        }
    })
});