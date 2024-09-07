/*
Опис ДЗ: Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої)

Приклад виконання:

Повинен знаходити: Wonderful, Joyful

Не повинен знаходити: Happiness, Time, Task, Apple
*/

let text = "Wonderful, Joyful, Pineapple, Orange, Pencil, Happiness, Time, Task, Apple";
let regex = /\b[^Aa\s,]{6,}\b/g;
let result = text.match(regex);
console.log(result);

