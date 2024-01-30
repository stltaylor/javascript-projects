//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

// console.log(nums1.sort());


// function minArr(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//           if (arr[j] > arr[j + 1]) {
           
//             newArr = arr[j];
//             arr[j] = arr[j + 1];
//             newArr = arr[j+1]
//     return newArr
// }




function minArr(arr) {
    let newArr = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < newArr) {
            newArr = arr[i];
        }
        }
    return newArr
}

function sortArr(arr) {
    let arry1 = []
    let arry2 = []
    while (arr.length > 0) {
        arry2 = minArr(arr)
        arry1.push(arry2)
        arr.splice(arr.indexOf(arry2), 1)

    }
    return arry1

}




console.log(sortArr(nums1))
console.log(nums1)