function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime){ alert("YES"); console.log(num);}
    else { alert("No"); }
}
let input=prompt("input number")
checkPrime(input);
