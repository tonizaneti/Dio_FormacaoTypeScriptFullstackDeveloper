const nome: string = "Toni";
const idade: number = 43;

console.log(`Olá, ${nome}!`);
console.log(`Você tem ${idade} anos.`);
console.log("Meu Primeiro Node + TypeScript funcionando!");

const num: number = 20;
if(num > 15) {
    console.log("Num maior que 15");
}else if(num === 15) {
    console.log("Num é igual a 15");
}else {
    console.log("Num menor que 15");
}

const typeUser = {
    admin:' Seja bem-vindo, Admin!', 
    student: ' Seja bem-vindo, Estudante!',
    viewer: 'Você pode visualizar'
}
function validateUser(user:string) {
    console.log(typeUser[user as keyof typeof typeUser]);
}

/*const usuario = "admin";
validateUser(usuario);*/
const usuario = "student";
validateUser(usuario);
/*const usuario = "viewer";
validateUser(usuario);*/