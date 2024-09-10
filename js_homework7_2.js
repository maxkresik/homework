//------------------------------------------------------//

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

//------------------------------------------------------//

//Bалідація email
var emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

//Фільтрація email
var trustedEmails = arr.filter(function(item) {
    return emailPattern.test(item.email);
}).map(function(item) {
    return item.email;
});

console.log(trustedEmails);
