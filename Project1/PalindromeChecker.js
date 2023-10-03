function palindrome (string) {
    const newstr = string.slice();
    const modsr = newstr
        .trim()
        .replaceAll(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();
    for (let i = 0; i < (Math.floor(modsr.length / 2)); i++){
        if (modsr.charCodeAt(i) != modsr.charCodeAt(modsr.length - i - 1)) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("race car"));