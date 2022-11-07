//EXERCÍCIO 3
const pessoas = [
    {name: "Fabiano Araújo", age:33},
    {name: "Gabriel Gomes", age:25},
    {name: "Fernando Henrrique", age:17},
    {name: "Ana Luiza", age:2},
    {name: "Geraldo do Nascimento", age:93},
    {name: "Miguel Souza", age:70},
    {name: "Antonio Miguel", age:69},
]
let pesquisa = "Gabriel Gomes";
let resultado = pessoas.find(function(cadastro){
    return cadastro.name === pesquisa;
})
console.log("Respotas da Questa 3:")
console.log(resultado)
console.log("---X--X--X--X--X--X--X--X--X--X--X--X--X--X")


//EXERCÍCIO 4
console.log("Respotas da Questa 4:")
pessoas.forEach((pessoa)=>{
    console.log(pessoa.name)
})
console.log("---X--X--X--X--X--X--X--X--X--X--X--X--X--X")


//EXERCÍCIO 5
console.log("Respotas da Questa 5:")
let id = 0;
pessoas.forEach((pessoa)=>{
    id++;
    pessoa.id=id;
})
console.log(pessoas)
console.log("---X--X--X--X--X--X--X--X--X--X--X--X--X--X")


//EXERCÍCIO 6
console.log("Respotas da Questa 6:")
pessoas.forEach((pessoa)=>{
    if(pessoa.age > 18){
        console.log(pessoa)
    }
})
console.log("---X--X--X--X--X--X--X--X--X--X--X--X--X--X")


//EXERCÍCIO 7
let idade = 0;
let divisor ="";
pessoas.forEach((pessoa)=>{
    idade= idade + pessoa.age;
    divisor++;

})
let total = idade/divisor;
console.log("Respotas da Questa 7:")
console.log(total.toFixed(0))