function palindrome(str) {
    var reversed = str.split("").reverse().join("");
    if (reversed === str) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}

palindrome("eye");
palindrome("car")
palindrome("mom")