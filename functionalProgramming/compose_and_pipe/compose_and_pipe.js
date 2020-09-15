// coomposing is the idea of any data that we give is obvious
// data --> fn --> data --> fn -->

const compose = (f, g) => (data) => f(g(data))
const multiplyBY3 = (num) => num*3;
const makePositive = (num) => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBY3, makePositive)

multiplyBy3AndAbsolute(-50) // return 150 


// pipe the same but instead of going from right to left it goes left to right 

const pipe = (f, g) => (data) => g(f(data))
const multiplyBY3 = (num) => num*3;
const makePositive = (num) => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBY3, makePositive)

multiplyBy3AndAbsolute(-50) // return 150 

