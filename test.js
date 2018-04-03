/*
var vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week off, not bad.");
} else {
  console.log("We're gonna have a great time!");
}
//=========================================================================
   i,j
[[12,4],[11,5],[10,6]]

var repeatNumbers = function(data) {
  // Put your solution here
};


function repeatNumbers(arr2d){
	var temp=[];
	for (var i = 0; i < arr2d.length; i++) {
		for (var j = 0; j < arr2d[i][1]; j++) {
			temp+=arr2d[i][0];
		}
		temp+=", ";
	}

	return temp;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));



//=======================================================================
function isOdd(num) {
  return num % 2 !== 0;
}
function isEven(num) {
  return num % 2 === 0;
}


var conditionalSum = function(values, condition) {
	var even=0;
	var odd=0;

  for (var i = 0; i < values.length; i++) {
  	if (isEven(values[i])) {
  		even += values[i];
  	}
  	if (isOdd(values[i])) {
  		odd += values[i];
  	}	
  }
  if (condition=="even") {

  	return even;

  }else{

  	return odd;
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//=========================================================================

*/
