//Part 1: Arrays

/* Sum function
Returns the sum of all elements in an array */
function sum(arr){
     let total = 0
     for(const i of arr){
        total += i
     }
     return total
}

console.log(sum([1,2,3])) // 6

/* Average function
Returns the average of all elements in an array */
function average(arr){
    return sum(arr)/ arr.length
}

console.log(average([1,2,3])) //2

/* min function
Returns the minimum of all elements in an array */
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

/* max function
Returns the maximum of all elements in an array */
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

/* capitalize function
Capitalize the strings by making the first letter capital */
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitalize("hello"))

/*reverse function
Reverses the characters in a string */
function reverse(str){
    return str.split("").reverse().join("")
}

console.log(reverse("hello"))


/* Count Vowels 
Count the number of vowels in the string*/
function countVowels(str){
    let vowels = ['a','e','i','o','u']
    let count = 0
    for (const c of str){
        if (vowels.includes(c)){
            count +=1
        }
    }
    return count
}

console.log(countVowels("hello"))

//Part 3: Objects

/* Create a Student objects and provide student grade average,
including if the student is in honoral or not*/
const student = {
    name: "Your Name",
    age: 20,
    grades: [85,90,78],
    getAverage: function(){
        // return average
        return average(this.grades)
    },
    isHonorRoll: function(){
        return average(this.grades) > 85
    }
}
console.log(student.getAverage())
console.log(student.isHonorRoll())