$( ".menu-toogle,.exit-btn, .link-side").click(function() {
    $(".side-default").addClass('side-open');
    $('.contato-parent').hide();
    $('.nav-logo-alt').fadeIn(300);
    $('.exit-btn').fadeIn(200);
    $("#nav-close").toggleClass("nav-open");
    $(".link-side").addClass('flex-imp');
    $(".link-side").fadeIn(300);
    $(".img-side").toggleClass("img-side-closed");
 });

$('.exit-btn').click(function(){
  $(".link-side").removeClass('flex-imp');
  $('.contato-parent').fadeIn(100); 
  $('.nav-logo-alt').fadeOut(300);
  $('.link-side').hide();
  $('.exit-btn').hide();
  $('.side-default').removeClass('side-open');
 })

 $('.link-side').click(function(){
  $('.nav-logo-alt').fadeOut(300);
  $(".link-side").removeClass('flex-imp');
  $('.exit-btn').hide();
  $('.side-default').removeClass('side-open')
})

 $(".card").hover(function(){
    $(".card-img").toggleClass("card-img-hover");
  });
  $('.bg-itens').click(function(){
    $('.bg-itens.active').each(function(){
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });

  $('.sobre-mim-btn').click(function(){
    $('.sobre-mim-content').show();
    $('.sobre-mim-btn').hide();
  })
  $('.sobre-mim-btn-alt').click(function(){
    $('.sobre-mim-btn').show();
    $('.sobre-mim-content').hide();
  })

  $('.bugs-btn').click(function(){
    $('.bugs-content').show();
    $('.bugs-btn').hide();
    $('.bugs-text-initial').hide();
  })
  $('.bugs-btn-alt').click(function(){
    $('.bugs-text-initial').show();
    $('.bugs-btn').show();
    $('.bugs-content').hide();
  })

$('.fullscreen-btn').click(function(){
  $('.contato-fixed').toggleClass('contato-open');
  $('.contato-parent').toggleClass('contato-par-open');
  $('.second-sec').toggleClass('show-f')
})

$('.email, .ctt, .return-img-alt').click(function(){
  $('.contato-popup').fadeIn(150);
  $('.contato-parent').toggleClass('hide');  
});
$('.return-img-alt').click(function(){
  $('.bugs-text').show();
  $('.contato-popup').fadeOut(150);
});

$('.ftallprojects, .allprojects').click(function(){
  $('.act-all').show();
  $('.act-fe').hide();
  $('.act-be').hide();
  $('.act-db').hide();
  $('.act-dsn').hide();
  $('.act-cl').hide();
  $('.act-mb').hide();

  $('.slider-fe').removeClass('show-slide');
  $('.slider-be').removeClass('show-slide');
  $('.slider-db').removeClass('show-slide');
  $('.slider-dsn').removeClass('show-slide');
  $('.slider-cl').removeClass('show-slide');
  $('.slider-mb').removeClass('show-slide');
  $('.slider-all').addClass('show-slide');
});
$('.ftfront-end, .front-end').click(function(){
  $('.act-fe').show();
  $('.act-all').hide();
  $('.act-be').hide();
  $('.act-db').hide();
  $('.act-dsn').hide();
  $('.act-cl').hide();
  $('.act-mb').hide();

  $('.slider-all').removeClass('show-slide');
  $('.slider-be').removeClass('show-slide');
  $('.slider-db').removeClass('show-slide');
  $('.slider-dsn').removeClass('show-slide');
  $('.slider-cl').removeClass('show-slide');
  $('.slider-mb').removeClass('show-slide');
  $('.slider-fe').addClass('show-slide');
});
$('.ftback-end, .back-end').click(function(){
  $('.act-be').show();
  $('.act-all').hide();
  $('.act-fe').hide();
  $('.act-db').hide();
  $('.act-dsn').hide();
  $('.act-cl').hide();
  $('.act-mb').hide();

  $('.slider-all').removeClass('show-slide');
  $('.slider-fe').removeClass('show-slide');
  $('.slider-db').removeClass('show-slide');
  $('.slider-dsn').removeClass('show-slide');
  $('.slider-cl').removeClass('show-slide');
  $('.slider-mb').removeClass('show-slide');
  $('.slider-be').addClass('show-slide');
});
$('.ftdatab, .datab').click(function(){
  $('.act-db').show();
  $('.act-all').hide();
  $('.act-fe').hide();
  $('.act-be').hide();
  $('.act-dsn').hide();
  $('.act-cl').hide();
  $('.act-mb').hide();

  $('.slider-all').removeClass('show-slide');
  $('.slider-fe').removeClass('show-slide');
  $('.slider-be').removeClass('show-slide');
  $('.slider-dsn').removeClass('show-slide');
  $('.slider-cl').removeClass('show-slide');
  $('.slider-mb').removeClass('show-slide');
  $('.slider-db').addClass('show-slide');
});
$('.ftdesign, .design').click(function(){
  $('.act-dsn').show();
  $('.act-all').hide();
  $('.act-fe').hide();
  $('.act-be').hide();
  $('.act-db').hide();
  $('.act-cl').hide();
  $('.act-mb').hide();

  $('.slider-all').removeClass('show-slide');
  $('.slider-fe').removeClass('show-slide');
  $('.slider-be').removeClass('show-slide');
  $('.slider-db').removeClass('show-slide');
  $('.slider-cl').removeClass('show-slide');
  $('.slider-mb').removeClass('show-slide');
  $('.slider-dsn').addClass('show-slide');
});
$('.ftcloud, .cloud').click(function(){
  $('.act-cl').show();
  $('.act-all').hide();
  $('.act-fe').hide();
  $('.act-be').hide();
  $('.act-db').hide();
  $('.act-dsn').hide();
  $('.act-mb').hide();

  $('.slider-all').removeClass('show-slide');
  $('.slider-fe').removeClass('show-slide');
  $('.slider-be').removeClass('show-slide');
  $('.slider-db').removeClass('show-slide');
  $('.slider-dsn').removeClass('show-slide');
  $('.slider-mb').removeClass('show-slide');
  $('.slider-cl').addClass('show-slide');
});
$('.ftmobile, .mobile').click(function(){
  $('.act-mb').show();
  $('.act-all').hide();
  $('.act-fe').hide();
  $('.act-be').hide();
  $('.act-db').hide();
  $('.act-dsn').hide();
  $('.act-cl').hide();

  $('.slider-all').removeClass('show-slide');
  $('.slider-fe').removeClass('show-slide');
  $('.slider-be').removeClass('show-slide');
  $('.slider-db').removeClass('show-slide');
  $('.slider-dsn').removeClass('show-slide');
  $('.slider-cl').removeClass('show-slide');
  $('.slider-mb').addClass('show-slide');
});

$('.item-inner').click(function(){
  $('.modal-video').fadeIn(150);
})
$('.exit-modal').click(function(){
  $('.modal-video').fadeOut(150);
})

$('.html-btn, #teste').click(function(){
  function link (){
    $('.stc-img').attr('src', '../img/11 html-logo.svg');
  }
  link();
})

$('.code-form').submit(function(e){
  var codeVal = $('.code-box').val();
  e.preventDefault;
  console.log(codeVal);
})

$('.dark-tm-img').click(function(){
  var codeVal = $('.code-box').val();
  $(this).toggleClass('invert');

  $('.code-dark').toggleClass('code-light');

  if(codeVal === 'matrix'){
    $('.code-box').toggleClass('code-mtx');
  }
  if(codeVal === 'mavie'){
    $('.code-box').toggleClass('code-childs')
  }
});

   // Cache original attributes
   var originalAttributes = $('.code-box').attr('class');
   // Reset from original
   
   $('.reset-img').click(function(){
     $('.code-box').empty()
     $('.code-box').attr('class',originalAttributes);
});

$('.fullscreen-btn').click(function(){
  $('.fullscreen-btn').toggleClass('full-open');
  $('.plus-img').toggleClass('plus-img-h')
  $('.minus-img').toggleClass('minus-img-s');
})

$('.full-open, .minus-img').click(function(){
  $('.plus-img').toggleClass('plus-img-s');
})

var s = $('.fe-fst-layer,.fe-sec-layer,.fe-trd-layer,.fe-fth-layer,be-fst-layer,be-sec-layer,be-trd-layer,be-fth-layer,db-fst-layer,db-sec-layer,db-trd-layer,db-fth-layer,dsn-fst-layer,dsn-sec-layer,dsn-trd-layer,dsn-fth-layer,cl-fst-layer,cl-sec-layer,cl-trd-layer,cl-fth-layer,mb-fst-layer,mb-sec-layer,mb-trd-layer,mb-fth-layer');

var FeOrAttr = $('.fst-lay,.sec-lay,.trd-lay,.fth-lay').attr('class')

$('.stc-fe').click(function(){
  $('.fst-lay,.sec-lay,.trd-lay,.fth-lay').attr('class', FeOrAttr);
  $('.fst-lay').addClass('fe-fst-layer');
  $('.sec-lay').addClass('fe-sec-layer');
  $('.trd-lay').addClass('fe-trd-layer');
  $('.fth-lay').addClass('fe-fth-layer');
})
$('.stc-be').click(function(){
  $('.fst-lay,.sec-lay,.trd-lay,.fth-lay').attr('class', FeOrAttr);
  $('.fst-lay').addClass('be-fst-layer');
  $('.sec-lay').addClass('be-sec-layer');
  $('.trd-lay').addClass('be-trd-layer');
  $('.fth-lay').addClass('be-fth-layer');
})

$('.stc-db').click(function(){
  $('.fst-lay,.sec-lay,.trd-lay,.fth-lay').attr('class', FeOrAttr);
  $('.fst-lay').addClass('db-fst-layer');
  $('.sec-lay').addClass('db-sec-layer');
  $('.trd-lay').addClass('db-trd-layer');
  $('.fth-lay').addClass('db-fth-layer');
})
$('.stc-dsn').click(function(){
  $('.fst-lay,.sec-lay,.trd-lay,.fth-lay').attr('class', FeOrAttr);
  $('.fst-lay').addClass('dsn-fst-layer');
  $('.sec-lay').addClass('dsn-sec-layer');
  $('.trd-lay').addClass('dsn-trd-layer');
  $('.fth-lay').addClass('dsn-fth-layer');
})
$('.stc-cl').click(function(){
  $('.fst-lay,.sec-lay,.trd-lay,.fth-lay').attr('class', FeOrAttr);
  $('.fst-lay').addClass('cl-fst-layer');
  $('.sec-lay').addClass('cl-sec-layer');
  $('.trd-lay').addClass('cl-trd-layer');
  $('.fth-lay').addClass('cl-fth-layer');
})
$('.stc-mb').click(function(){
  $('.fst-lay,.sec-lay,.trd-lay,.fth-lay').attr('class', FeOrAttr);
  $('.fst-lay').addClass('mb-fst-layer');
  $('.sec-lay').addClass('mb-sec-layer');
  $('.trd-lay').addClass('mb-trd-layer');
  $('.fth-lay').addClass('mb-fth-layer');
})
