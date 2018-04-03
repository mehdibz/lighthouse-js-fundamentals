
function lastIndexOf(input_array, num) {

  var i = 0;
  var j = 0;
  var index = 0;

  if((input_array.length === 0)){
    return -1;
  }
  
  while(i < input_array.length){

    if(input_array[i] === num){
      index = i;
      j++;
    }
    i++;
  }
  if(j !== 0){
    return index;
  }else{
    return -1;
  }
  
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);