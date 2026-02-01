const testFun = (arg: number): number => {
    return 0
}

//              👇 Generic -> Think like it holds the data type
const fakeFun = <T>(arg: T): T => {
    return arg
}

fakeFun(10)
fakeFun("10")
fakeFun<boolean>(true) // 👉 What data type should be given to function 