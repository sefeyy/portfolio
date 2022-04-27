$(function(){
    var icon =$('div.cntWrap>div.content>div.section>div.art>div.article>div.icon>i');
    var wd = $(window).width();
    var mv = 0;
    t = 0;

    if(wd > 1024){
        // pc버전
        mv =460;
        t=2;
    }else if(wd >= 420 && wd <= 1024 ){
        // tab버전
         mv =320;
         t=2;
    }else{
        // 모바일버전
        mv =300;
        t=6;
    }


    $('div.bnrWrap.bnrWrap01>div.banner.bnr01>ul>li').first().addClass('show');
    $('.bnr01>ul>li').odd().first().css('filter', 'grayscale(0)');
    $('div.bnrWrap.bnrWrap01>div.banner.bnr01>ul>li').odd().click(function(){
      $('div.bnrWrap.bnrWrap01>div.banner.bnr01>ul>li').removeClass('show');
      $(this).prev().addClass('show');
      $('.bnr01>ul>li').odd().css('filter', 'grayscale(1)');
      $(this).css('filter', 'grayscale(0)');
    });

    var i = 0;
    var onoff = true;
    $('.content>div.section>div.btn').click(function(){
      if(onoff){
        i++;
        if(i>=t){
          i=t;
          onoff = false;
          $('.content>div.section>div.btn').text('접기');
        }
        $('.content>div.section>div.art').css('height',(i+2)*mv+'px');
      }else{
        i--;
        if(i<=0){
          i=0;
          onoff = true;
          $('.content>div.section>div.btn').text('더보기');
        }
        $('.content>div.section>div.art').css('height',(i+2)*mv+'px');
      }
    });  

    icon.click(function(){
      if(onoff){
        $(this).text('');
        onoff = false;
      }else{
        $(this).text('');
        onoff = true;
      }
    });


    $('.toTop').click(function(){
      $('html,body').stop().animate({ scrollTop : 0 },1000);            
    });

  });