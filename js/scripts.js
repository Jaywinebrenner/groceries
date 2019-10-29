



$(document).ready(function(){
  $(".groceryForm").submit(function(event){
    event.preventDefault();

    var blanks = ["grocery1", "grocery2", "grocery3"];
    console.log(blanks);
    blanks.forEach(function(blank){
      var userInput = $("#" + blank).val();
      $("ul").append("<li>" + userInput + "</li>");

    })
  })
})











// $(document).ready(function() {
  //   $(".groceryForm").submit(function(event) {
    //     event.preventDefault();
    //
    //     var groceries = ["1", "2", "3"];
    //     var groceArray = [];
    //
    //     groceries.forEach(function(groce) {
      //       var capUserInput = $("#inputGrocery" + groce).val().toUpperCase();
      //       groceArray.push(capUserInput);
      //
      //       $(".hide").hide();
      //     });
      //
      //     groceArray.sort();
      //
      //     groceArray.forEach(function(groc) {
        //       $("#outputGrocery").append("<li>" + groc + "</li>");
        //     });
        //   });
        // });
