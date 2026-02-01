// const sum = (x: number, y: number): number => {
const sum = (x: number, y: number): string => {
    // return 50
    return "Dell"
}

// Find the largest number from 2 numberes and return the string saying larget number is ---
const largestNum = (Num1: number, Num2: number): string => {
    /*
    if (Num1 > Num2) {
        // return "Num1 is larger than Num2!" + Num1
        return `${Num1} is larger!`
        
    }
    else {
        return "Num2 is larger than Num1!" + Num2
    }
    */

    return Num1 > Num2 ? `${Num1} is larger!` : `${Num2} is larger!`
}