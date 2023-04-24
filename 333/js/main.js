$('.nav ul li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown();
});

$('.nav ul li').mouseleave(function () {
    $(this).find('.submenu').stop().slideUp();
})

//slide
$('#imgsbar li a').click(function (e) {
    e.preventDefault(); //#에 의해서 새로고침 되는 현상을 막아줌.
    //a.attr('b')==>b속성값을 가져와라. 값 반환
    // a.attr('img-left')
    // a.attr(b,c)==> b가 가진 속성값을 c로 바꿔라
    var imgLeft = $(this).attr('img-left')
    console.log(imgLeft)
    //$("#imgs").animate({실행문},시간)
    $("#imgs").animate({
        left: imgLeft
    }, 500)
});


//modal
$(".partner_info").click(function () {
    // $('.modal').show();
    $('.modal').fadeIn();
});
$('.modal .close').click(function () {
    // $('.modal').hide();
    $('.modal').fadeOut();
})

//window


$('.contact').click(function () {
    var myWindow = window.open("contact.html", "child", "width=400,height=400, left=300, top=300");
})