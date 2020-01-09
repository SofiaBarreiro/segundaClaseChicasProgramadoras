
$(document).ready(function(){

    resultado = 0;

    comportamientos();
});


function comportamientos(){

    $('[data-toggle="popover"]').popover();

    $('.btn').click(function(){
       // $("img").fadeIn(100);
        $("img").show();
        $('[data-toggle="popover"]').popover();
        $('img').attr('data-content',resultado).data('bs.popover').setContent();
    });

    
}
