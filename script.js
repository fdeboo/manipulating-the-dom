$(document).ready(function() {
    $(".nav-link").on("click", function() {
        let thisCardClass = "." + this.id + "-card";
        let everyCardClass = ".card";

        $(everyCardClass).removeClass("highlight_stream");
        $(thisCardClass).addClass("highlight_stream");
   });

   /*$("p").on("click", function() {
       $("p").children("a").css("background-color", "transparent");
       $(this).children("a").css("background-color", "yellow");
   });*/


   $("#filter-cards").click(function() {
       let cardClass = ".card";
       let highlightedCards = ".highlight_stream";
       
       $(cardClass).not(highlightedCards).css("display", "none");

       });

   $("#reappear").click(function() {
       let cardClass = ".card";
       let highlightedCards = ".highlight_stream";
       
       $(cardClass).not(highlightedCards).css("display", "block");

       });

   
   
});




   /*$("#stream1").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
   $("#stream2").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });*/
