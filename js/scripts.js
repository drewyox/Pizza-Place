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

  if (size === "Personal") {
    sizePrice = 7;
  }
  else if (size == "Medium") {
    sizePrice=11;
  }
  else if (size==="Large") {
    sizePrice=14;
  }
  else {
    sizePrice=16;
  }
   $("input:checkbox[name=toppings]:checked").each(function(){
      var toppingChoice = $(this).val();
      toppings.push(toppingChoice)
    })
    var pizza = new Pizza(sizePrice, toppings);
    console.log(toppings);
    $(".sizeCat").text(size);
    $(".toppingCat").text(toppings);

    $(".totalPrice").text("Your total comes to: $" + pizza.price());
    event.preventDefault();
  })
});
