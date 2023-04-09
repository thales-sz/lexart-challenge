const gerarId = () => {
  const alfaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 16; i++) {
    id += alfaNum[Math.floor(Math.random() * alfaNum.length)]
    if (i === 3 || i === 7 || i === 11) {
      id += "-";
    }
  }
  return id;
}

const id = gerarId()

console.log('Id aleatório:', id)