const sum = (num1: number, num2: number): number => num1 + num2

sum(10, 20)

const x: number = 10

console.log(typeof sum) // "function"
console.log(typeof x) // "number"
// 👆 Gives data type of variable

type returnType = ReturnType<typeof sum>
// 👆 Gives functions return data type

const store = {
    getState: (): Boolean => true,
    st: 10
}

type returnType2 = ReturnType<typeof store.getState>
type dataType = typeof store.st