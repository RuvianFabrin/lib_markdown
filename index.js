const chalk = require('chalk');
const fs = require('fs');
function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] });    
        
    }
    return arrayResultados.length > 0 ? arrayResultados : 'não há links no arquivo';
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho informado'));
}
//Daqui pra frente só vamos usar async e await
async function pegaArquivo(caminho) {
    const encoding = 'utf8';
    try {
        const texto = await fs.readFileSync(caminho, encoding);
        return extraiLinks(texto);
        
    } catch (erro) {
        trataErro(erro);
    }
    
}
//regex101.com
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
//pegaArquivo('./arquivos/texto1.md');
module.exports = pegaArquivo;