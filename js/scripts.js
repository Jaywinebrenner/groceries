$(document).ready(function() {
  $(".groceryForm").submit(function(event) {
    event.preventDefault();



    var groceries = ["1", "2", "3"];


    groceries.forEach(function(groce) {
      // groce.toUpperCase();
      // groceries.sort();
      var userInput = $("#inputGrocery" + groce).val();

      $("#outputGrocery").append("<li>" + userInput + "</li>");

      $(".hide").hide();

    });
  });
});
