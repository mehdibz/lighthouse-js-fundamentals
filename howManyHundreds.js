function howManyHundreds(arg) {
  if(arg % 100 === 0){
    return (arg / 100); 
  }else{
    return (arg = (arg - (arg % 100)) / 100);
  }
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);