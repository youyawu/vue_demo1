
function factorial(n, total) {
    if (n === 1){
        console.trace()
        return total;
    }
    return factorial(n - 1, n + total);
  }
  
  factorial(5, 1) // 120