$(document).ready(function(){
    $('.toggle').click(function (e) { 
        e.preventDefault();
        isLight = $('.light').attr('src');
        if(isLight === "img/pic_bulboff.gif"){
            $('.light').attr('src',"img/pic_bulbon.gif");
            $('.toggle').text('Tắt')
            $('.toggle').css('background' , '#00BCD4');
            $('.toggle').css('transition' , 'all 0.5s');
        }else{
            $('.light').attr('src',"img/pic_bulboff.gif");
            $('.toggle').text('Bật')
            $('.toggle').css('background' , ' none');
        }
    });
})