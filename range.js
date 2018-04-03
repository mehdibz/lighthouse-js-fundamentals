function range(start, end, step) {

  var arr = [];

  if ((step < 1) || (start > end )){
    return arr;
  }else{

    var i = start;
    while(i <= end){
      arr.push(i);
      i += step;
    }
    return arr;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));