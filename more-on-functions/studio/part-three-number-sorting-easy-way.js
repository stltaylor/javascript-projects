//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function maxArr(arr) {
    let newArr = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > newArr) {
            newArr = arr[i];
        }
        }
    return newArr
}

function sortArr(arr) {
    let arry1 = []
    let arry2 = []
    while (arr.length > 0) {
        arry2 = maxArr(arr)
        arry1.push(arry2)
        arr.splice(arr.indexOf(arry2), 1)

    }
    return arry1

}




console.log(sortArr(nums1))
console.log(nums1)