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
}); 