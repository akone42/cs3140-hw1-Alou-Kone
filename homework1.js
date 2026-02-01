//Part 1: Arrays
function sum(arr){
     let total = 0
     for(const i of arr){
        total += i
     }
     return total
}

console.log(sum([2,4,5,6])) // 17

//
function average(arr){
    return sum(arr)/ arr.length
}

console.log(average([2,4,5,6]))

// min
function min(arr){
    let min = Infinity
    for (const i of arr){
        if(i < min){
            min = i
        }
    }
    return min
}

console.log(min([1,-4,5,6]))