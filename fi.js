
function fibonacci (n){
var f0 = 0;
var f1 = 1;
var fn = 1;
    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        for ( var i = 2; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}
console.log("15 so dau tien cua day so Fibonacci : ")
    for (i = 0; i < 15; i++) {
     console.log( fibonacci(i))
    }
