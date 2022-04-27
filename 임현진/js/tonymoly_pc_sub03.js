$(function(){
    var btn = $('.btns>.btn');
    var pag = $('.pagbtn>.paging');
    var artG = $('.artGroup');
    var bar = $('.nav>li');
    var cnt02Btn = $('.cnt02>.artView>.artGroup>.article>.texts>.btn')
    var i=0;
    var mv = 0;
    var wd = $(window).width();
    
    if(wd > 1024){
        mv = 33.333;
    }else if(wd > 420 && wd <= 1024){
        mv = 100;
    }else{
        mv = 100;
    }

    function paging(){
        var ind = $(this).index();
        pag.find('li').removeClass('on');
        $(this).addClass('on');
        artG.css('margin-left',ind*-mv+'%');
        i=ind
    }
    function leftSlide(){
        i++;
        if(wd > 420 && wd <= 1024){
            if(i>=3){
                i=3;
            }
        }else{
            if(i>=6){
                i=6;
            }
        }
        artG.css('margin-left',i*-mv+'%');
        pag.find('li').removeClass('on');
        pag.find('li').eq(i).addClass('on');
        console.log(i)
    }
    function rightSlide(){
        i--;
        if(i<=0){
            i=0;
        }
        artG.css('margin-left',i*-mv+'%');
        pag.find('li').removeClass('on');
        pag.find('li').eq(i).addClass('on');
    }

    pag.find('li').click(paging);
    btn.find('.left>i').click(rightSlide);
    btn.find('.right>i').click(leftSlide);

    cnt02Btn.click(function(){
        $('.texts')
    });

    bar.last().mouseover(function(){
        $('.barMenu').css('opacity','1');
    });
    $('.barMenu').mouseleave(function(){
        $(this).css('opacity','0');
    });

    $('.cnt02 .btn').click(function(){
        if(wd > 1024){
            $(this).prev().css('height','160px');
        }else if(wd > 420 && wd <= 1024){
            $(this).prev().css('height','100px');
        }else{
            $(this).prev().css('height','80px');
        }
    });
});