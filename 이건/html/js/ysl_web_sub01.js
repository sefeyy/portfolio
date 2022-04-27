$(function(){
    var i = 0;
    $('.content.cnt02 .btn').eq(1).click(function(){   
        $('.artGroup>.article').last().prependTo('.artGroup');

    });
    $('.content.cnt02 .btn').eq(0).click(function(){
        $('.artGroup>.article').first().appendTo('.artGroup');
    });
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
});