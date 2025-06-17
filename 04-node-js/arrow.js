let soma = function (a, b) { return a + b};
let subtracao = (a, b) => { return a - b} ;
let multiplicacao = (a,b) => a * b;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numeros.filter(numero => numero % 2 === 0);
let dobrados = numeros.map(numero => numero * 2);
let imparesDobrados = numeros
    .filter(impar => impar % 2 !== 0)
    .map(numero => numero * 2);

console.log(soma(1,2));
console.log(subtracao(1,2));
console.log(multiplicacao(1,2));
console.log(pares);
console.log(dobrados);
console.log(imparesDobrados);