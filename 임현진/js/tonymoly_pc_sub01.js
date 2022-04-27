$(function(){
    var i=0;
    var ind =0;
    var wd = $(window).width();
    var mv =0;
    // more활성화 시켜서 펼쳐지기 하기 위해서 디폴트값을 ture로 설정하였다
    var onoff = true;
    var bar = $('.nav>li');
    
    if(wd > 1024){
        mv = 460;
    }else if(wd > 420 && wd <= 1024){
        mv = 465;
    }else{
        mv = 475;
    }

        $('.content>.btn').click(function(){
            if(onoff){
                i++;
                if(wd > 1024){
                    if(i>=4){
                        i=4;
                        onoff = false;
                        $('.btn>i').css('opacity','0');
                        $(this).find('span').text('Fold In');
                    }
                }else if(wd > 420 && wd <= 1024){
                    if(i>=10){
                        i=10;
                        onoff = false;
                        $('.btn>i').css('opacity','0');
                        $(this).find('span').text('Fold In');
                    }
                }else{
                    if(i>=10){
                        i=10;
                        onoff = false;
                        $('.btn>i').css('opacity','0');
                        $(this).find('span').text('Fold In');
                    }
                }
                $('.section').css('height',(i+2)*mv+'px');
            }else{
                i--;
                if(i<=0){
                    i=0;
                    onoff = true;
                    $('.btn>i').css('opacity','1');
                    $(this).find('span').text('More')
                }
                $('.section').css('height',(i+2)*mv+'px');
            }
        });

        var imi = $('.image>i');
        var tri = $('.iRight');
        var ihet= $('div.cntWrap>div.content>div.section>div.article>div.texts>div.icon>div.iRight');

        $('div.cntWrap>div.content>div.section>div.article').mouseenter(function(){
            ind=$(this).index();
        });
        
        imi.click(function(){
            $('.wish').eq(ind).toggleClass('oon');
            $(this).toggleClass('red');
            ihet.find('i:first').eq(ind).toggleClass('co');

        });

        tri.find('i:first').click(function(){

            $('div.cntWrap>div.content>div.section>div.article').eq(ind).find('.wish').toggleClass('oon');
            $(this).toggleClass('co');
            imi.eq(ind).toggleClass('red');
        });

        bar.last().mouseover(function(){
            $('.barMenu').css('opacity','1');
        });
        $('.barMenu').mouseleave(function(){
            $(this).css('opacity','0');
        });

        tri.find('i:eq(1)').click(function(){
            $('.lightBox').css({
                opacity:'1',
                zIndex: '3'
            });
        });
        $('.icon').mouseleave(function(){
            $('.lightBox').css({
                opacity:'0',
                zIndex: '1'
            });
        });

        tri.find('i:last').click(function(){
            alert('링크가 복사되었습니다');
        });
    });
   
   
   
   
   
   
   
   
   
   
   