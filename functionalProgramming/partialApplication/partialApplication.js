// producing a function with a smaller number of parameters


const multiply = (a,b,c) => a*b*c
const curriedMultiply = (a) => (b) => (c) => a*b*c
curriedMultiply(3)(4)(10) // output 120

// bind gives us another function and we can pass a parameter
const partialMultiply = multiply.bind(null, 5)
partialMultiply(4,10) // 200
