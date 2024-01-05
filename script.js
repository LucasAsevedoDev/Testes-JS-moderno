//TODOS OS RESULTADOS SÃO EXIBIDOS NO CONSOLE!

//Essa é a forma normal de determinar funções
function somaNormal  (a, b){
    return a + b
}
function SubtracaoNormal  (a, b){
    return a - b
}
function divisaoNormal  (a, b){
    return a / b
}
function multiplicacaoNormal  (a, b){
    return a * b
}

console.log('Por padrão "a"" terá 20, e "b" terá o valor de 5')
const a = 20
const b = 5

console.log(`Soma normal de a + b = ${somaNormal(a, b)}`)
console.log(`Subtração normal de a - b = ${SubtracaoNormal(a, b)}`)
console.log(`Divisão normal de a / b = ${divisaoNormal(a, b)}`)
console.log(`Multiplicação normal de a + b = ${multiplicacaoNormal (a, b)}`)
//Essa é a forma normal de determinar funções

//Esse é o padrão de arrowFunctions, exemplo com operações básicas
const anonymousSum = function (a, b) {
    return a + b
}
const anonymousSub = function (a, b) {
    return a - b
}
const anonymousDiv = function (a, b) {
    return a / b
}
const anonymousMulti = function (a, b) {
    return a * b
}

console.log(`   Soma Anônima: ${anonymousSum(a, b)}`)
console.log(`   Subtração Anônima: ${anonymousSub(a, b)}`)
console.log(`   Divisão Anônima: ${anonymousDiv(a, b)}`)
console.log(`   Multiplicação Anônima: ${anonymousMulti(a, b)}`)
//Esse é o padrão de Anonymous Functions, exemplo com operações básicas

//ESSE é o padrão de ArrowFunctions

const arrowSum = (a, b) => { //as duas formas estão corretas, a de baixo é ainda mais simples
    return a + b             //porém só dessa forma: "const function (a,b) => a - b", quando retorna só uma linha 
}
const arrowSub = (a, b) => a - b

const arrowDiv = (a, b ) => {
    return a / b
}

const arrowMulti = (a, b) => a * b

console.log(`       Soma com arrow Function => ${arrowSum(a, b)}`)
console.log(`       Sub com arrow Function => ${arrowSub(a, b)}`)
console.log(`       Div com arrow Function => ${arrowDiv(a, b)}`)
console.log(`       Multi com arrow Function => ${arrowMulti(a, b)}`)
//ESSE é o padrão de ArrowFunctions


//plus: Essa é uma forma que deixa ainda mais fácil a forma de escrever uma função!
const number = 22
const double = number => `O dobro de ${number} é: ${number * 2}`
console.log(double(number))
//plus: Essa é uma forma que deixa ainda mais fácil a forma de escrever uma função!

//Agora uma funcionalidade muito prática para arrays

const cidades = ['Porto Alegre', ' Paranavaí', 'Brasilia', 'Belo Horizonte', 'São Paulo', 'Fortaleza', 'Manaus', 'Curitiba', 'Campinas', 'Campo Grande', 'Cuiabá'] 

const startingWithC = cidades.filter(cidades => cidades[0] === 'C')
console.log( `Retornando apenas as cidades que começam com a letra "C" ${startingWithC}
`)