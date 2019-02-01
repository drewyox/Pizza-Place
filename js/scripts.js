function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
return this.size + this.toppings.length*2.50;
}




$(document).ready(function() {

  var toppings = [];
  var sizePrice = "";

  $("#pizzaCreator").submit(function(event) {
  var size = $("input:radio[name=size]:checked").val();

  if (size === "personal") {
    sizePrice = 7;
  }
  else if (size == "medium") {
    sizePrice=11;
  }
  else if (size==="large") {
    sizePrice=14;
  }
  else {
    sizePrice=16;
  }
   $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingChoice = $(this).val();
      toppings.push(toppings)
    })


    var pizza = new Pizza(sizePrice, toppings);



    console.log(pizza);
    console.log("Your total comes to: $" + pizza.price());
    event.preventDefault();
  })
});
