namespace casting {
    let idade: any = 25;
    (idade as number).toFixed(2);
    (idade as string).toUpperCase();
    (idade as string[]).length;
}

let nome: string = 53 as unknown as string;


