type aluno = {
    nome: string;
    cursos: string[];
    idade: number;
}

const alunos= [
    {
        nome: "Thayna",
        idade: 28,
        curso: ["TypeScript", "JavaScript"],
    },
    {
        nome: "Thayna",
        idade: 28,
        curso: ["TypeScript", "JavaScript"],
    }
]

alunos.push({
    nome: "Carlos",
    idade: 30,
    curso: ["Python"],
})

// const novoAluno: aluno = {
//     nome: "Maria",
//     idade: 25,
// }

function exibeAluno(aluno: aluno) {
    console.log(`Nome: ${aluno.nome}`);
}