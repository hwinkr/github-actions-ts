// TODO : factorial function test && use github actions
export const factorial = (n:number) : number => {
    if (n == 0) return 1

    return n * factorial(n - 1)
}

// hello