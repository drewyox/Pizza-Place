// function Pizza(size, toppings){
//   this.size = size;
//   this.toppings = toppings;
// }


$(document).ready(function() {
  var toppings = [];

  $("#pizzaCreator").submit(function(event) {
  var size = $("input:radio[name=size]:checked").val();
   $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingChoice = $(this).val();
      toppings.push(toppingChoice)
    })
    console.log(size, toppings);
    event.preventDefault();
  })
});
