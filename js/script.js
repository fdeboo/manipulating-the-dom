$(document).ready(function(){
    //$(".theButton").click(function() {
       // $(".theButton").hide();
    //});

    //$(".theButton").click(function() {
        //$(this).hide();
    //});

    $( ".theButton" ).click(function() {
        $("#panel .container").siblings().fadeTo( "slow", 0.1 );
    });

    $( ".superButton" ).click(function() {
        $("#panel .container").siblings().fadeTo( "slow", 1.0 );
    });

    $( ".theButton" ).click(function() {
        let panelColor = $(this).css("background-color");
        $(".superButton").css("color", panelColor );
    });

    //$( ".theButton" ).mouseenter(function() {
      //  $(this).addClass("makeBlack");
    //});

    //$( ".theButton" ).mouseleave(function() {
       // $(this).removeClass( "makeBlack" );
    //});
});