function checkProbabilityTheory(count) {
    
    let oddCount = 0;   // Лічильник непарних чисел
    let evenCount = 0;  // Лічильник парних чисел

    for (let i = 0; i < count; i++) {
        // Генерація числа від 100 до1000
        let randomNumber = Math.floor(Math.random() * 901) + 100;

        // Перевірка, чи є число парним
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Обчислення відсотків
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    // Pезультаті
    console.log(`Кількість згенерованих №: ${count}`);
    console.log(`Непарних №: ${oddCount}`);
    console.log(` Парних №: ${evenCount}`);
    console.log(`% парних до непарних: ${evenPercentage.toFixed(2)} % / ${oddPercentage.toFixed(2)} %`);
}

checkProbabilityTheory(1000);
