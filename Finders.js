function findElement(arr, func) {
    // let num = 0;
    var num;
    var i;
    for(i=0; i<arr.length; i+=1){
        num=arr[i];
        // if(num % 2 === 0){
        //     console.log(num)
        // }
        console.log(func);
    }
    return num;
    //найти первый элемент что делится без остатка
}

// findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });