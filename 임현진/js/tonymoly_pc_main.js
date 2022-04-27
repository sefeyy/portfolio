$(function(){
    var artG = $('.section>.artGroup');
    var bar = $('.nav>li');
    var wd = $(window).width();
    var mv = 0;

    if(wd > 1024){
        mv = 25;
    }else if(wd > 420 && wd <= 1024){
        mv = 50;
    }else{
        mv = 100;
    }

    // cnt02 슬라이드 초기세팅
    artG.find('.image:last').prependTo(artG);
    artG.css('margin-left',-mv+'%');
    
    function left(){
        artG.stop().animate({
            marginLeft : 0
        },500,function(){
            artG.find('.image:last').prependTo(artG);
            artG.css('margin-left',-mv+'%');
        });
    };
    function right(){
        artG.stop().animate({
            marginLeft : 2*-mv+'%'
        },500,function(){
            artG.find('.image:first').appendTo(artG);
            artG.css('margin-left',-mv+'%');
        });
    };

    // 왼쪽방향으로 슬라이드
    $('.iconRight').click(right);
    // 오른쪽방향으로 슬라이드
    $('.iconLeft').click(left);

    bar.last().mouseover(function(){
        $('.barMenu').css('opacity','1');
    });
    $('.barMenu').mouseleave(function(){
        $(this).css('opacity','0');
    });
});