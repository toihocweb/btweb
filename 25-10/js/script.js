$(document).ready(function(){

    $('.email,.pass').change(function (e) { 
        e.preventDefault();
        if($(this).val()){
            $(this).siblings('label').hide();
        }else{
            $(this).siblings('label').show()
        }
    });

    $('#formlogin').submit(function (e) { 
        e.preventDefault();
        
        email = $('.email').val()
        pass = $('.pass').val()
        if(email && pass){
            alert('Welcome: ' + email)
        }else{
            alert('Có j đâu mà submit')
        }
        
    });

})
