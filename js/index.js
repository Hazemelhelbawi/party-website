// $('.singer').click(function(){
//     if($('.singer h4').hasClass('fSinger'))
//     {
//         $('.one').slideToggle(1000)

//     }
//     else if ($('.singer h4').hasClass('sSinger'))
//     {
//         $('.two').slideToggle(1000)

//     }
//     else if ($('.singer h4').hasClass('tSinger'))
//     {
//         $('.three').slideToggle(1000)

//     }
//     else if ($('.singer h4').hasClass('foSinger'))
//     {
//         $('.four').slideToggle(1000)

//     }
// })
$(document).ready(function () {
  $(".singer div:first").css("display", "block");
  $(".singer h4").click(function () {
      $(this).next().slideToggle(500);
      $(".singer div").not($(this).next()).slideUp(500);
  });
});





$("#bar i").click(function(){
  let  boxWidth = $(".listSlider").outerWidth();
  if($(".listSlider").css('left')=='0px')
  { 
    $(".listSlider").animate({left:`-${ boxWidth}`},1000);

 


  }
  else{
    $(".listSlider").animate({left:`0px`},1000)

  }
})




$(function(){
  let maxText = $('textarea').attr('maxlength');
  $('textarea').keyup(function(){
    let textLength = $(this).val().length;
    let charReamining = maxText - textLength ;
    $('.message').html(`<span><span> ${charReamining}</span> Character Reamining </span>`)

    console.log(charReamining);
  })
 
 
  console.log(maxText);
})


$(document).ready(function(){
  $('#loading').fadeOut(2000,function(){
      $('body').css('overflow','visible')
  })
})

$('.box').click(function(){
  let currentLink=$(this).attr('href');
  let currentOffset =$(currentLink).offset().top;
  $('body,html').animate({scrollTop: currentOffset},800)
})