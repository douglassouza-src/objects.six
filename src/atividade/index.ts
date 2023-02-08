//1)
const list1 = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
const numberOdd = list1.filter(n => n % 2 !== 0);
console.log(numberOdd);
//2)
const list2 = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
const total = list2.reduce((a, b) => a + b, 0);
console.log(total);
//3)
class Pessoa {
  nome: string;
  idade: number;
  salario?:number;

  constructor (nome: string, idade: number, salario?: number) {
    this.nome = nome
    this.idade = idade
    this.salario = salario || undefined
  }
};

const pessoa = [new Pessoa('José', 25), new Pessoa('Maria', 28), new Pessoa('João', 15), new Pessoa('Zé', 18), new Pessoa('Mario', 30), new Pessoa('Paulo', 19)];
const novaLista1 = pessoa.filter(menorQue => menorQue.idade < 23);
console.log(novaLista1);
//4)
const novaLista2 = pessoa.filter(menorQue => menorQue.idade < 30);
const filtrados2 = novaLista2.reduce((a, b) => a + b.idade, 0);
const mediaIdade = filtrados2 / novaLista2.length;
mediaIdade.toFixed(0);
console.log(mediaIdade);
//5)
const pessoa1 = [new Pessoa('José', 25, 5200), new Pessoa('Maria', 28, 1000), new Pessoa('João', 15, 2530), new Pessoa('Zé', 18, 568), new Pessoa('Mario', 30, 3333), new Pessoa('Paulo', 19, 5098)];
const novaLista3 = pessoa1
  .filter(menorQue2 => menorQue2.salario < 1027)
  .map(({nome, idade}) => ({nome, idade}));

console.log(novaLista3);
//6)
class Aluno {
  nome: string;
  idade: number;
  nota?: number;
  status?: string;

  constructor (nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  calcularMedia(nota:number){
    this.nota = nota;

    if(this. nota >= 6) {
      this.status = 'APROVADO'
    } else {
      this.status = 'REPROVADO'
    }
  }
};

const listaAlunos = [
  new Aluno('Ronaldo', 46),
  new Aluno('Ronaldinho', 44),
  new Aluno('Messi', 34),
  new Aluno('Neymar', 15),
  new Aluno('Romario', 50),
  new Aluno('Rivaldo', 45),
  new Aluno('Kaka',42 ),
]

const respostasDaProva = ['C', 'B', 'A', 'A', 'C', 'C', 'B', 'B', 'C', 'A'];

const opçcoes = ['A','B','C'];

listaAlunos.forEach((aluno) => {
  let respostaAluno = [];
  for(let i = 0; i < respostasDaProva.length; i++) {
    const sorteioResposta = Math.floor(Math.random() * 4);
    respostaAluno.push(opçcoes[sorteioResposta])
  }

  let respostaCerta = 0;

  for(let i = 0; i < listaAlunos.length; i++) {
    if(respostaAluno[i] == respostasDaProva[i]) {
      respostaCerta++;
  }
}

aluno.calcularMedia(respostaCerta)

});

const listaAprovados = listaAlunos.filter((e) => e.status === 'APROVADO');
const listaReprovados = listaAlunos.filter((e) => e.status === 'REPROVADO');
const mediaDasNotas = (listaAlunos.reduce((soma, proxima) => {return soma + proxima.nota!}, 0) /listaAlunos.length);

//Organizar notas e alunos
listaAlunos.sort((a, b) => a.nota! - b.nota!);

const melhorAluno = listaAlunos[listaAlunos.length - 1];
const piorAluno = listaAlunos[0];

//Resultados
console.log(listaAlunos);
console.log(listaAprovados);
console.log(listaReprovados);
console.log(mediaDasNotas);
console.log(melhorAluno);
console.log(piorAluno);