$(function(){
    var cnt2art = $('.content.cnt02 .article');
    var cnt2txt = $('.content.cnt02 .texts');


        $('.nav>li').eq(3).mouseover(function(){
            $('.menu>li').css({
                display : 'block',
                opacity : '1'
            });
        });
        $('.menu').mouseleave(function(){
            $('.menu>li').css({
                display : 'none'
            });
            
        });



    cnt2art.children('.image').click(function(){
        // var ind = $(this).index();
        // console.log(ind);
        // cnt2txt.eq(ind).css('height','200px');
        // alert('!!');
        $(this).next().css('height','200px');
    });
    cnt2txt.find('i:eq(0)').click(function(){
        $(this).parent().css('height','0px');
    });
});