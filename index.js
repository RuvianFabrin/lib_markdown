const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho informado'));
}
//Daqui pra frente só vamos usar async e await
async function pegaArquivo(caminho) {
    const encoding = 'utf8';
    try {
        const texto = await fs.readFileSync(caminho, encoding);
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    }
    
}
/*
function pegaArquivo(caminho) {
    const encoding = 'utf8';
    fs.promises.readFile(caminho, encoding)
    .then((conteudo) => chalk.green(console.log(conteudo)))
    .catch((erro) => trataErro(erro));
}*/

/*
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro , texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}
*/
pegaArquivo('./arquivos/texto1.md');