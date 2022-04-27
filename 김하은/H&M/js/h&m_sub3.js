$(function(){
  var wd = $(window).width();
  var mv = 0;
  var t =0;

  if(wd > 1024){
      // pc버전
      mv =-75;
      t=3;
  }else if(wd >= 420 && wd <= 1024 ){
      // tab버전
       mv =-100;
       t=3;
  }else{
      // 모바일버전
      mv =-100;
      t=3;
  }


    i =0;
    $('.cnt01>div.section>div.icons>div.btn>i').first().click(function(){
      i++;
      if(i>=t){
        i=t;
        $('.cnt01>div.section>div.icons>div.btn>i').first().css('color','#ccc');
      }else if(i>0){
        $('.cnt01>div.section>div.icons>div.btn>i').last().css('color','#f00');
      }
      $('.cnt01>div.section>div.artView>div.artGroup').css('margin-left',i*mv+'%');
      $('.cnt01>div.section>div.artView>div.artGroup>div.article>div.texts').removeClass('on');
      $('.cnt01>div.section>div.artView>div.artGroup>div.article>div.texts').eq(i).addClass('on');
    });

    $('.cnt01>div.section>div.icons>div.btn>i').last().click(function(){
      i--;
      if(i<=0){
        i=0;
        $('.cnt01>div.section>div.icons>div.btn>i').last().css('color','#ccc');
      }else if(i<t){
        $('.cnt01>div.section>div.icons>div.btn>i').first().css('color','#f00');
      }
      $('.cnt01>div.section>div.artView>div.artGroup').css('margin-left',i*mv+'%');
      $('.cnt01>div.section>div.artView>div.artGroup>div.article>div.texts').removeClass('on');
      $('.cnt01>div.section>div.artView>div.artGroup>div.article>div.texts').eq(i).addClass('on');
    });

    $('.toTop').click(function(){
      $('html,body').stop().animate({ scrollTop : 0 },1000);            
    });
  });