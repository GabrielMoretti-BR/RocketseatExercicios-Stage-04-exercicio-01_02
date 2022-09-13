//  Comentário
/* 
    Comentario multiline

*/
const Alunos = [
  {
    name: "Luiz",
    notaUm: 3,
    notaDois: 8,
    aprovado: null,
  },
  {
    name: "Alexandra",
    notaUm: 7,
    notaDois: 8,
    aprovado: null,
  },
  {
    name: "Carlos",
    notaUm: 6,
    notaDois: 8,
    aprovado: null,
  },
]


function numerosEAfins(){
    let number_One = prompt("Insira o Primeiro Numero");
    let number_Two = prompt("Insira o Segundo Numero");

    number_One = Number(number_One)
    number_Two = Number(number_Two)
        

    alert(`O resultado é: \n ${number_One} + ${number_Two} = ${number_One+number_Two}`);
    alert(`O resultado é: \n ${number_One} - ${number_Two} = ${number_One-number_Two}`);
    alert(`O resultado é: \n ${number_One} x ${number_Two} = ${number_One*number_Two}`);
    alert(`O resultado é: \n ${number_One} / ${number_Two} = ${number_One/number_Two}`);
    alert(`O resto desta divisão é: ${number_One%number_Two}`);

    let restoTotal = (number_One+number_Two)%2;

    if(restoTotal==0){
        alert(`A Soma dos dois numeros é Par.`);
        if(number_One == number_Two){
            alert(`E os dois numeros são iguais`);
        }
    }else{
        alert(`A Soma dos dois numeros é Impar.`);
    }
}

function media(notaUm, notaDois){
    return (notaUm+notaDois)/2
}

function passouOuNao(){

    for(let aluno of Alunos){
        let mediaAluno = Number(media(aluno.notaUm,aluno.notaDois))
        let aprovado;

        if(mediaAluno >= 7){
            aprovado = true;
        }else{
            aprovado = false;
        }
        aprovado = aprovado ? 'Aprovado!':'Reprovado';
        
        alert(`A media do(a) aluno(a) ${aluno.name} é: ${mediaAluno};\n e ele foi ${aprovado}`)

    }
}


let exerciseChoice = prompt('Qual exercicio deseja Ver? \n 1.Exercicio 01 (numeros) \n 2.Exercicio 02 (Media)')

exerciseChoice = Number(exerciseChoice);

switch(exerciseChoice){
    case 1:
        numerosEAfins();
        break
    case 2:
        passouOuNao();
        break
    default:
        alert("Opção inválida. Tente novamente")
}
