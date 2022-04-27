$(function(){
    var wd = $(window).width();
    var i =0;
    var menu =$('div.hdrWrap>div.header>div.hdrRight>ul.icons>li');
    var btns =$('.cnt01>div.header>div.btns>.btn');
    var artGroup =$('.cnt01>div.section>div.artView>div.artGroup');
    var bnrBtn =$( '.banner>.btn>li');
    var bnrGr =$('.banner>.artView>.artGroup');
    var c2Tbtn =$('.cnt02>.section>.artTop>.btn>i');
    var c2Trag =$('.cnt02>.section>.artTop>.article>.articleRight>.artGroup');
    var c2Tlag =$('.cnt02 div.section>div.artTop>div.article>div.articleLeft>.artView>.artGroup');
    var c2Bbtn =$('.cnt02>.section>.artBtm>.btn>i');
    var c2Blag =$('.cnt02>.section>.artBtm>.article>.articleLeft>.artGroup');
    var c2Brag =$('.cnt02 div.section>div.artBtm>div.article>div.articleRight>.artView>.artGroup');
    var mv =0;
    var b=0;
    var t = 0;

    if(wd > 1024){
        // pc버전
        mv =-25;
        t=-100;
    }else if(wd >= 420 && wd <= 1024 ){
      // tab버전
      mv =-33.333;
  }else{
      // 모바일버전
      t=0;
      mv =-33.333;
  }

    var onoff = true;
    menu.last().find('i').click(function(){
      if(onoff){
        $('div.navboxWrap').css({
        height : 40+'px'
      });
      onoff = false;
      }else{
        $('div.navboxWrap').css({
          height : 0+'px'
        });
        onoff = true;
      }
      
    });

    btns.last().click(function(){
      i++;
      if(i>=4){
          i=4;
          $(this).css( 'opacity' , '0' );
      }else if(i<4){
        btns.first().css('opacity' , '1' );
      }
      artGroup.css({
        'margin-left' : i*mv+'%'
      });
      console.log(i);
    });

    btns.first().click(function(){
      i--;
      if(i<=0){
        i=0;
        $(this).css('opacity','0');
      }else if(i<4){
        btns.last().css('opacity','1');
      }
      artGroup.css({
        'margin-left' : i*mv+'%'
      });
      console.log(i);
    });

    bnrBtn.click(function(){
        var ind =$(this).index();
        bnrGr.css('margin-left',ind*-100+'%');

        bnrBtn.removeClass('on');
        $(this).addClass('on');
    });

    function bnrSlide(){
      b++;
      if(b>=4){
        b=0;
      }
        bnrGr.css('margin-left',b*-100+'%');

        bnrBtn.removeClass('on');
        bnrBtn.eq(b).addClass('on');
    };
  
    var auto = setInterval(bnrSlide,2000);

    bnrBtn.click(function(){
      clearInterval(auto);
  })


  c2Trag.find('.art:first').appendTo(c2Trag);
  c2Trag.css({marginLeft : 0+'%'});
  
  c2Tlag.find('.art:first').appendTo(c2Tlag);
  c2Tlag.css({marginLeft : 0+'%'});



  c2Tbtn.click(function(){
    c2Trag.stop().animate({
      marginLeft : -105+'%'
    },1000,function(){
      c2Trag.find('.art:first').appendTo(c2Trag);
      c2Trag.css({marginLeft : 0+'%'});
    });

    c2Tlag.stop().animate({
      marginLeft : -100+'%'
    },1000,function(){
      c2Tlag.find('.art:first').appendTo(c2Tlag);
      c2Tlag.css({marginLeft : 0+'%'});
    });

  });

  c2Blag.find('.art:last').prependTo(c2Blag);
  c2Blag.css({marginLeft : -108+'%'});

  c2Brag.find('.art:last').prependTo(c2Brag);
  c2Brag.css({marginLeft : t+'%'});


  c2Bbtn.click(function(){
    c2Blag.stop().animate({
      marginLeft : -4+'%'
    },1000,function(){
      c2Blag.find('.art:last').prependTo(c2Blag);
      c2Blag.css({marginLeft : -108+'%'});
    });

    c2Brag.stop().animate({
      marginLeft : 0+'%'
    },1000,function(){
      c2Brag.find('.art:last').prependTo(c2Brag);
      c2Brag.css({marginLeft : t+'%'});
    });
  });

  $('.toTop').click(function(){
    $('html,body').stop().animate({ scrollTop : 0 },1000);            
  });

    
    
  });