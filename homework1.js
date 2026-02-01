//Part 1: Arrays
function sum(arr){
     let total = 0
     for(const i of arr){
        total += i
     }
     return total
}

console.log(sum([1,2,3])) // 6

//
function average(arr){
    return sum(arr)/ arr.length
}

console.log(average([1,2,3])) //2

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

console.log(min([3,1,2])) //1

// max
function max(arr){
    let max = -Infinity
    for (const i of arr){
        if(i >max){
            max = i
        }
    }
    return max
}

console.log(max([3,1,2])) //3

//Part 2: Strings 
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize("hello"))

function reverse(str){
    return str.split("").reverse().join("")
    return temp.join("")
}

console.log(reverse("hello"))