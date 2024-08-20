console.log(pow(11, 3)); // = 1331
function pow(x, y) {
    let result = 1;          
    for (let i = 0; i < y; i++) {
        result *= x;         
    }
    return result;           
}



