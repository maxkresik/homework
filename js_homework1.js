// 1. 
// 'number' - string
// 3 => string
// 3 => string
const result_1 = 'number' + 3 + 3; // = 'number33'
console.log(result_1);

// 2. 
// null => 0 
const result_2 = null + 3; // = 3
console.log(result_2);


//3. 
// 5 => true, тому оператор && обчислює другий операнд
// "qwerty" - останнє оцінене правдиве значення
const result_3 = 5 && "qwerty"; // = 'qwerty'
console.log(result_3);


// 4. 
// +'40' => string '40' => 40
// +'2' => string '2' => 2
// 40 + 2 = 42
// "hillel" - string 
const result_4 = +'40' + +'2' + "hillel"; // = '42hillel'
console.log(result_4);

// 5. 
// '10' - string, => 10
// 10 - 5 = 5
// 5 === 6 
const result_5 = '10' - 5 === 6; // = false
console.log(result_5);

// 6. 
// true => 1 i false => 0 
// 1 + 0 = 1
const result_6 = true + false; // = 1
console.log(result_6);

// 7. 
// '4px' not number, => NaN 
// NaN - 3 = NaN
const result_7 = '4px' - 3; // = NaN
console.log(result_7);

// 8. 
// '4' - string, => 4
// 4 - 3 = 1
const result_8 = '4' - 3; // = 1
console.log(result_8);

// 9. 
// 3 ** 0 = 1 
// '6' + 1 = "61"
const result_9 = '6' + 3 ** 0; // = '61'
console.log(result_9);

// 10. 
// '6' - string, = 6
// 12 / 6 = 2
const result_10 = 12 / '6'; // = 2
console.log(result_10);

// 11. 
// 5 === 6 - false
// '10' + false = "10false" 
const result_11 = '10' + (5 === 6); // = '10false'
console.log(result_11);

// 12. 
// null => undefined
// null == '' = false
const result_12 = null == ''; // = false
console.log(result_12);

// 13. 
// 9 / 3 = 3
// 3 ** 3 = 27
const result_13 = 3 ** (9 / 3); // = 27
console.log(result_13);

// 14. 
// 'false' string, !!'false' => true
// 'true' string, !!'true' => true
// true == true => true
const result_14 = !!'false' == !!'true'; // = true
console.log(result_14);

// 15. 
// 0 => false, || => '0' && 1
// '0' => true, '0' && 1 => 1 (остання правдива)
const result_15 = 0 || '0' && 1; // = 1
console.log(result_15);

// 16. 
// +null => null => 0
// 0 == false => true
// true < 1 = true 
const result_16 = (+null == false) < 1; // = true
console.log(result_16);

// 17. 
// false && true => false (false && будь-що є false)
// false || true => true (оскільки || оцінює до першого правдивого значення)
const result_17 = false && true || true; // = true
console.log(result_17);

// 18. 
// false || true => true
// false && true => false (оскільки && вимагає, щоб обидва були true)
const result_18 = false && (false || true); // = false
console.log(result_18);

// 19. 
// +null => 0
// 0 == false => true
// 1 ** 5 => 1 (exponentiation)
// true < 1 => false (оскільки true розглядається як 1)
const result_19 = (+null == false) < 1 ** 5; // = false
console.log(result_19);
