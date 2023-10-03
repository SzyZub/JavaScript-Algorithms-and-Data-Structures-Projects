function telephoneCheck(str) {
  const correct = [/^((1\s)*|1*)\d{3}-\d{3}-\d{4}$/,
  /^((1\s)*|1*)*\(\d{3}\)\d{3}-\d{4}$/, 
  /^((1\s)*|1*)*\(\d{3}\)\s\d{3}-\d{4}$/,
  /^((1\s)*|1*)*\d{3}\s\d{3}\s\d{4}$/, 
  /^((1\s)*|1*)*\d{10}$/];
  
  for (let i = 0; i < correct.length; i++){
    if (str.match(correct[i])) { 
      return true;
    }
  }
  return false;
  
}

console.log(telephoneCheck("1 (555) 555-5555"))