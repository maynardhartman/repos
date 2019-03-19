// Javascript practice problems - Higher Order Functions and Callbacks

// add two arrays ( consume(array1, array2)) = array1 + array2
const array1 = ['Harry', "James", "Aurthor", "Jerome"];
const array2= ['June', 'Alice', 'Betty', 'Mable'];

function consume ( array1, array2, callback) {
    return callback(array1, array2);
};

function join ( array1, array2 ) {
    const size1 = array1.length;
    const size2= array2.length;
    if ( size1 === 0 || size2 === 0) {
        console.log (`You must supply an array with more than 0 or 1 - Size + ${size}`);
    }
   for ( let i = 0; i <= size2; i++) {
      if (array2.length == 0) {
        return(array1);
        } else { array1.push(array2[i]);
    }
   }
}
consume(array1, array2, join);
console.log(array1);
