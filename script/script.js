


$("#exitBtn").click(function(){

    $("#noticeModal").css("display", "none");


});



$("#post_1").click(function(){

    $("#noticeModal").css("display", "block");

});




$("#mainMenu>li").mouseover(function(){                                                                                                 $(this).children("ul").stop().fadeIn();
});

$("#mainMenu>li").mouseout(function(){                                                                                                  $(this).children("ul").stop().fadeOut();
});


$("#mainMenu").mouseover(function(){

    $("#promotionText").css("display", "none");

});

$("#mainMenu").mouseout(function(){

    $("#promotionText").css("display", "block");

});

//풀다운 네비게이션 끝


$("#next").click(function(){
  var x =  $("#slideshow").css("left");
    x= parseInt(x);
    $("#slideshow").css("transition", "1s");
    if( x == 0 ){
        $("#slideshow").css("left", "-1205px");
    }
    else if( x == -1205)
    {
        $("#slideshow").css("left", "-2410px");
    }
    else{
        $("#slideshow").css("left", "-0px");
    }
});

$("#prev").click(function(){
  var x =  $("#slideshow").css("left");
    x= parseInt(x);

    if( x == 0 ){
        $("#slideshow").css("left", "-2410px");
    }
    else if( x == -2410)
    {
        $("#slideshow").css("left", "-1205px");
    }
    else{
        $("#slideshow").css("left", "-0px");
    }
});

