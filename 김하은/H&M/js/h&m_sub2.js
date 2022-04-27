$(function(){
    var bnr=$('.bnrWrap01>.bnr01>div.bnrTop>.bnrGroup');
    var paging=$('.bnrWrap01>.bnr01>div.bnrTop>ul.btn>li');
    var icon =$('div.cntWrap>div.content>div.section>div.art>div.article>div.icon>i');
    var wd = $(window).width();
    var mv = 0;
    var ml = 0;
    t = 0;
    b =0;

    if(wd > 1024){
        // pc버전
        mv =460;
        t=2;
        ml=0;
    }else if(wd >= 420 && wd <= 1024 ){
        // tab버전
         mv =320;
         t=2;
         ml=-100;
    }else{
        // 모바일버전
        mv =300;
        t=6;
        ml=0;
    }

    paging.click(function(){
      var ind =$(this).index();
      bnr.css('margin-left',ind*ml+'%');

      paging.removeClass('on');
      $(this).addClass('on');
  });

  function bnrSlide(){
    b++;
    if(b>=4){
      b=0;
    }
    bnr.css('margin-left',b*ml+'%');

    paging.removeClass('on');
    paging.eq(b).addClass('on');
  };

  var auto = setInterval(bnrSlide,2000);

  paging.click(function(){
    clearInterval(auto);
})


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