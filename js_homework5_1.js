let obj = {
    name: 'Car',
    brand: 'Zaporozhec',
    price: 25000,

    getInfo: function() {
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                console.log(key + ': ' + this[key]);
            }
        }
    }
};

obj.getInfo(); // Правильна інформація про об'єкт
console.log("---------------"); //
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта

obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
