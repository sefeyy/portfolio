$(function(){
    var bar = $('.nav>li');

    $('.toTop').click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });

    $('.buyBox>li').last().click(function(){
        $('html,body').stop().animate({ scrollTop : 0 },500);
    });

    bar.last().mouseover(function(){
        $('.barMenu').css('opacity','1');
    });
    $('.barMenu').mouseleave(function(){
        $(this).css('opacity','0');
    });
    
    $('.btn>li').eq(1).click(function(){
        $('.lightBox').css('opacity','1');
    });
    $('.btn>li').eq(1).mouseleave(function(){
        $('.lightBox').css('opacity','0');
    });

    $('.btn>li').eq(0).click(function(){
        alert('찜 목록에 추가되었습니다');
    });

    $('.buyBox>li').eq(0).click(function(){
        alert('찜 목록에 추가되었습니다');
    });
    $('.buyBox>li').eq(1).click(function(){
        $('.lightBox').css('opacity','1');
    });
    $('.buyBox>li').eq(1).mouseleave(function(){
        $('.lightBox').css('opacity','0');
    });
});