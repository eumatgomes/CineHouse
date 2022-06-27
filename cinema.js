var cinema = "Cineminha";
//NOME DA LOJA
let catalogo = require('./database/catalogo.json')
const fs = require('fs')
//COMANDO QUE VAI BUSCAR OS FILMES NA PASTA DATABASE E AS INFORMAÇÕES DO ARQUIVO CATALOGO.JSON

const adicionarFilme = (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) => {
//USAR O .PUSH
const filme = {
    codigo: codigo,
    titulo: titulo,
    duracao: duracao,
    atores: atores,
    anoDeLancamento: anoDeLancamento,
    emCartaz: emCartaz
}
catalogo.filmes.push(filme)
}
//FUNÇÃO QUE VAI ADICIONAR O FILME NO ARQUIVO CATALOGO

function buscarFilme(idFilme){
//USAR O .INDEXOF OU .FOREACH .MAP
// function buscarFilmePeloCodigo(codigoDoFilme){
//     catalogo.map(
//         function (filme){
//             if (filme.codigo == codigoDoFilme){
//                 console.log(filme.titulo)
//             } 
//         }
//     )
// } 
}

// function alterarStatusEmCartaz(idFilme, status){
//USAR O .FOREACH .MAP
// function alteraStatus(codigoDoFilme){
//     catalogo.map(
//         function (filme){
//             if (filme.codigo == codigoDoFilme){
//                 console.log(!filme.emCartaz)
//             }
//         }
//     )
// }
}
adicionarFilme()
