function rot13(str) {
  const newarr = [];
  const alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  for (let i = 0; i < str.length; i++){
    if (str[i].match(/[A-Z]/)) {
      let x = alph.indexOf(str[i]);
      newarr.push(alph[(x+13) % 26]);
    } else {
      newarr.push(str[i])
    }
  }
  return newarr.join("");
}

console.log(rot13("SERR PBQR PNZC"));