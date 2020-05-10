function findElement(arr, func) {
    // let num = 0;
    var num;
    var i;
    for(i=0; i<arr.length; i+=1){
        console.log(func(arr[i]));
        if(func(arr[i]) === true){
            console.log(arr[i]);
            return arr[i];
        }
    }
    // return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });