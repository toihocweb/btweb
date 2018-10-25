$(document).ready(function(){
    $('.email,.pass').change(function (e) { 
        e.preventDefault();
        if($(this).val()){
            $(this).siblings('label').hide();
        }else{
            $(this).siblings('label').show()
        }
    });
})
