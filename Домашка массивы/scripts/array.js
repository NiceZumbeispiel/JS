
var array = [1, -2, 6, 3, 4, 5];
var sum = 0;
for (var i=0; i<array.length; i++) {
    if (array[i] % 2 == 0 && array[i]>0){
    sum += array[i] ;
    }
}
console.log( sum );
