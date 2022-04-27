$(function(){
    var vbtn = $('.artView .btns');
    var atg = $('.artGroup');

    vbtn.find('.btn').last().click(function(){;
        $('.artGroup>.article').last().prependTo(atg);
    });
    vbtn.find('.btn').first().click(function(){
        $('.artGroup>.article').first().appendTo(atg);
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
