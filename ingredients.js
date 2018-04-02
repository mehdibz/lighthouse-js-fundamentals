var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("First section");
var i=0;
while(i < ingredients.length){
	console.log(ingredients[i++]);
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nSecond section");
var i;
for(i=0; i< ingredients.length; i++){
	console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nThird section");
var i=ingredients.length;
while(i > 0 ){
	console.log(ingredients[--i]);
}