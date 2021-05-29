let arr = [3,7];

//adding at the begining
arr.unshift(1,2);
console.log(arr);

//adding at the middle
arr.splice(3,0,4,5,6);
console.log(arr);

//adding at the end
arr.push(8,9);
console.log(arr);

//remove from begining
arr.splice(0,2)
console.log(arr);