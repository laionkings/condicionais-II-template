// let idade = Number(prompt("Qual a sua idade?"));

// if(idade => 18){
//     console.log("Você está apto a pedir o cartão!")
// }else{
//     console.log("Você não pode pedir um cartão!")
// }


// let escolhaUsuario
// escolhaUsuario = Number(prompt("Digite um número de 1 a 4 para escolher o cartão."))

// let cartao
// switch (escolhaUsuario){
//     case 1:
//         cartao = "Fácil"
//         break
//     case 2:
//         cartao = "Black"
//         break
//     case 3:
//         cartao = "Platinum"
//         break
//     case 4:
//         cartao = "Master Gold"
//         break
//     default:
//         cartao = "Cartão não pode ser emitido"
//         break
// }

// console.log("Cartão", cartao);


let numero = +(prompt("Digite um número"))

    if(numero % 2 === 0 && numero % 3 === 0){
        console.log("É divisivel por 2 e 3.")
       numero === 30 ? console.log("Ufa acertei") : console.log("Não foi dessa vez")
       switch (numero){
        case 6:
            numero = "Número 6 escolhido";
            break
        case 12:
            numero = "Número 12 escolhido";
            break
        case 18:
            numero = "Número 18 escolhido";
            break
        case 30:
            numero = "Número 30 escolhido";
            break
    }
  }