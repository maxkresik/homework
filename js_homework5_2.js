var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    //загальної вартості послуг
    price: function() {
        let total = 0;
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] === 'string') {
                total += parseInt(this[key]);
            }
        }
        return total + " грн";
    },

    //мінімальної вартості послуг
    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] === 'string') {
                let price = parseInt(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }
        return min + " грн";
    },

    //mаксимальної вартості послуг
    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] === 'string') {
                let price = parseInt(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }
        return max + " грн";
    }
};

// новa послугу
services['Розбити скло'] = "200 грн";

console.log("загальна вартість:", services.price()); // загальну вартість "наданих послуг".
console.log("мінімальна вартість:", services.minPrice()); // повертає мінімальний price
console.log("максимальна вартість:", services.maxPrice()); // повертає максимальний price
