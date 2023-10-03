function convertToRoman(num) {
  let changnum = num;
  let biggest = 0;
  const arr = [];
  let table = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }
  let tablekeys = Object.keys(table);
  while (changnum > 0){
    for (let i = 0; i < tablekeys.length; i++){
      if (Math.floor(changnum / parseInt(tablekeys[i]))){
        if (parseInt(tablekeys[i]) > biggest){
          biggest = tablekeys[i];
        }
      }
    }
    arr.push(table[biggest]);
    changnum -= biggest;
    biggest = 0;
  }
  return arr.join("");
}
