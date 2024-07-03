// let value = [1,2,3,4]
// value.forEach((num) => {
//     console.log(num * num);
// });

// let nums = [3,5,8,9]

// let calcsquae = (nums) => {
//     console.log(nums * nums)
// }
// nums.forEach(calcsquae)

// let newAr = nums.map((val) => {
//     return val*2
// })
// console.log(newAr)

// let arr = [3,6,56,78,9,0,34]
// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(output)

// let marks = [99,87,67,89,92,78,90]
// let toppers = marks.filter((val) => {
//     return val > 90
// })
// console.log(toppers)

let n = prompt("Enter a number here: ")
let arr = [];
for( let i = 1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr)

let sum = arr.reduce((res, curr) =>{
    return res + curr
})
console.log("sum = ",sum)
let factorial = arr.reduce((res, curr) =>{
    return res * curr
})
console.log("factorial = ",factorial)