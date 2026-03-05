const alunos = [
  { nome: "João", nota: 5 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 6 },
  { nome: "Ana", nota: 4 },
  { nome: "Lucas", nota: 8 },
  { nome: "Carla", nota: 3 },
];

const filtrarAlunosAprovados = (listaDeAlunos) => {
  return listaDeAlunos.filter((aluno) => aluno.nota >= 6);
};

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovados);
