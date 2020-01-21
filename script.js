$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("p").click(function() {
        $("p").css('color', 'red');
   });
   $("h2").mouseenter(function() {
        $("h2").css('background-color', 'lightblue');
        $("#card1, #card2, #card3, #card4, #card5, #card6").css('font-size', '1.5em');
   });
   $("a").mouseenter(function() {
       $("body").css("background-color", "#000");
   });
   $("a").mouseleave(function() {
       $("body").css("background-color", "#eee");
   });
   $("#html_btn").mouseenter(function() {
       $("#html_btn").fadeTo("2000","0.5");    
   });
   $("#html_btn").mouseleave(function() {
       $("#html_btn").fadeTo("2000","1.0");    
   });   
   $("#html_btn").on("click", function() {
       //$("#html_btn").hide("2000");
       $("#html_para").slideToggle();       
   });
}); 