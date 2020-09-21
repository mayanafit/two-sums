
function twoSums(arr, target) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            const sums = arr[i] + arr[j+1]
            if (sums === target) {
                result.push(i)
                result.push(j+1)
                break;
            }
        }
    }
    return result.splice(0,2)
}

const arr1 = [2,7,11,15] 
const target1 = 13
const arr2 = [3,2,4] 
const target2 = 6
const arr3 = [3,3] 
const target3 = 6
const arr4=[4,5,7,9,34,1,3]
const target4= 35


console.log(twoSums(arr1, target1))
console.log(twoSums(arr2, target2))
console.log(twoSums(arr3, target3))
console.log(twoSums(arr4, target4))
