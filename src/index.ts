export const add = (num1:number, num2:number) => num1 + num2;

// TODO : factorial function test && use github actions
export const factorial = (n:number) : number => {
    if (n < 0){
        throw Error('incorrect Input : this function only accept positive number')
    }

    if (n == 0) return 1

    return n * factorial(n - 1)
}