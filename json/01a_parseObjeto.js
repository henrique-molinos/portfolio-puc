let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0, 1, 2, 3] }';

// Propriedade ainda não existe -- Erro
// console.log(user.friends[0]) ?? "Propriedade inexistente";

user = JSON.parse(user);
console.log(user.friends[0]);
