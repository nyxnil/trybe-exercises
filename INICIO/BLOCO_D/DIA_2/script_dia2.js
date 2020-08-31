let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);
let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
console.log(soma);
let media =  soma / numbers.length;
console.log(media);
if (media > 20 ) {
    console.log("valor maior que 20")
}else {
    console.log("valor menor que 20")
};
let maior = 0;
for (let i = 0; i < numbers.length; i++) {
    if ( maior < numbers[i] ) {
        maior = numbers[i]
    }
};
console.log("o maior número é: ", maior);

let cont = 0;
let primos = 0;
for (let i = 0; i < numbers.length; i++) {
    cont = numbers[i] % 2;
    if (cont !== 0) {
        primos = primos + 1 
    }
};
if (primos == 0) {
    console.log("nenhum valor ímpar encontrado")
}
console.log("A quantidade de números primos é", primos)

let menor = 99999;
for (let i = 0; i < numbers.length; i++) {
    if ( menor > numbers[i] ) {
        menor = numbers[i]
    }
};
console.log("o menor número é: ", menor);

for (let i = 1; i <= 25; i++) {
    console.log("Número ", i)
};

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] / 2);
}