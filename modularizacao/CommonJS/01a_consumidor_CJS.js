const circulo = require('./01a_definicao');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

// Desestruturando o objeto e acessando a função diretamente
const {area} = require('./01a_definicao');
console.log(`Área do círculo de raio 2 é ${area(2)}`);

