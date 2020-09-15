// currying 
// i expect one argument at a time
const multiply = (a,b) => a*b
const curriedMultiply = (a) => (b) => a*b
// curriedMultiply(5)(3)
const curriedMultiplyBy5 = curriedMultiply(5)

// 10 years 
curriedMultiplyBy5(4) // output 20