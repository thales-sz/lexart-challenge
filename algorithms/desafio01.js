const input = [ 'a', 10, 'b', 'hola', 122, 15]

const arrayFilter = (input) => {
  const letters = input.filter((elem) => typeof elem === 'string')
  const numbers = input.filter((elem) => typeof elem === 'number')
  const biggest = Math.max(...numbers)

  console.log("Array contendo de letras:", letters)
  console.log("Array contendo de números:", numbers)
  console.log("Maior número:", biggest)
}
