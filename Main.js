// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question("Add two numbers to add them together", function(nums1, nums2) {
//     const answer = nums1 + nums2
//     console.log(`${nums1} + ${nums2} is ${answer} `)
//     rl.close()
// })


// Create a function that creates a grid

// const makeGrid = (row, column) => {
    
//     let grid = []
//     let current = 0

//     for (let i = 0; i < row; i++) {
//         grid[i] = []
//         for (let j = 0; j < column; j++) {
//             current++
//             grid[i][j] = current
//         }
//         current = 0
//     }
//     return grid;
// }

// console.log(makeGrid(4,3))


// Create a function that flattens an array

    // const flatten = (array) => {
    //     let result =[].concat.apply([], array)
    //     return result
    // }
    // console.log(flatten([3,2,3,[1,3,43,4],5]))


    function getLength(array) {
        return 0 in array ? 1 + getLength(array.slice(1)) : 0;
    }
    
console.log(getLength([14,5,4,3,2,3,4]))