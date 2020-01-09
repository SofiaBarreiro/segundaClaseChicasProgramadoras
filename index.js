
$(document).ready(function(){

    resultado = 2 +2;

    


    comportamientos();
});


function comportamientos(){

    $('[data-toggle="popover"]').popover();

    $('.btn').click(function(){
       // $("img").fadeIn(100);
        $("img").show();
        $('[data-toggle="popover"]').popover();
    
    });


    $('img').hover(function(){
        $('img').attr('data-content',resultado).data('bs.popover').setContent();
    });

}
