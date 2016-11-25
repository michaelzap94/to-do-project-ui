//SHORT USING CSS-line-through and color grey

$("ul").on("click", "li", function() {
  $(this).toggleClass("myCompleted");
});

//////////////////////////////////////////////////////////////
//clicked on x to delete element

$("ul").on("click", "span", function(e) {

  $(this).parent().fadeOut(300, function() {
    $(this).remove();
  });
  e.stopPropagation();

});
////////////////////
//creation of new todos

$("input[type='text']").keypress(function(event) {

  if (event.which === 13) { //CHECKS FOR ENTER KEY
    console.log("you hit enter");

    var todoText = $(this).val();
    $(this).val(""); //clears value of input

    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");

  }

});

///////////////////////plus

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle(300);
})