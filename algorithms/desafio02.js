const hashMap = new Map()
const nums = [1, 2, 3, 4, 5]

hashMap.set('add', function (nums) {
  return nums.reduce((acc, curr) => acc + curr, 0)
})

hashMap.set('sub', function (nums) {
  return nums.reduce((acc, curr) => acc - curr)
})

hashMap.set('mul', function (nums) {
  return nums.reduce((acc, curr) => acc * curr, 1)
})

hashMap.set('div', function (a, b) {
  if (b === 0) return "Não é possível dividir por zero."
  else return a / b
})

console.log(`Array ${nums} somado:`, hashMap.get("add")(nums));
console.log(`Array ${nums} subtraido:`, hashMap.get("sub")(nums))
console.log(`Array ${nums} multiplicado:`, hashMap.get("mul")(nums))
console.log('Divisão entre 6 e 2:', hashMap.get("div")(6, 2))
console.log('Divisão entre 6 e 0:', hashMap.get("div")(10, 0))