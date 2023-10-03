function checkCashRegister(price, cash, cid) {
  let suminreg = 0;
  let change = cash - price;
  let biggest = -1;
  const arr = [];
  let counter = 0;
  const newcid = {
  0.01: [cid[0][1]/0.01, "PENNY"],
  0.05: [cid[1][1]/0.05, "NICKEL"],
  0.1: [cid[2][1]/0.1, "DIME"],
  0.25: [cid[3][1]/0.25, "QUARTER"],
  1: [cid[4][1]/1, "ONE"],
  5: [cid[5][1]/5, "FIVE"],
  10: [cid[6][1]/10, "TEN"],
  20: [cid[7][1]/20, "TWENTY"],
  100: [cid[8][1]/100, "ONE HUNDRED"]
};
  for (let i = 0; i < cid.length; i++){
    suminreg += cid[i][1];
  }
  suminreg *= 100;
  suminreg = Math.round(suminreg);
  suminreg /= 100;
  if (suminreg == change) {
    return {
      status: "CLOSED",
      change: cid
    }
  } 
  if (suminreg < change) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  while (biggest != -2){
    biggest = -2;
    for (let value in newcid) {
      if (newcid[value][0] > 0 & value < change) {
        if (parseFloat(value) > biggest){
          biggest = parseFloat(value);
        }
      }
    }
    
    if (biggest == -2) {
      break;
    }
    
    while (0 < change & newcid[biggest][0] > 0) {
      if (!(change - biggest < 0)){
        change -= biggest;
        change *= 100;
        change = Math.round(change);
        change /= 100;
        counter += 1;
      }    
      newcid[biggest].splice(0, 1, newcid[biggest][0] - 1);     
    }
    arr.push([newcid[biggest][1], counter * biggest]);
    counter = 0;
  }
  if (change == 0) {
    return {
      status: "OPEN",
      change: arr
    }
  } else {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
} 
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))