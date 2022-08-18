let cinema = "Cineminha";
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
const json = json.stringify(catalogo)
fs.writeFileSync('./database/catalogo.json')
}
//FUNÇÃO QUE VAI ADICIONAR O FILME NO ARQUIVO CATALOGO

function buscarFilme(){
//USAR O .INDEXOF OU .FOREACH .MAP
    for (let i=0; i<catalogo.filmes.lenght; i++){
        catalogo.filmes[i].codigo === codigo ? console.log(catalogo.filmes[i]) : ''
    }
}

const listarTodosOsFilmes = () => {
    for (let i = 0; i < catalogo.filmes.lenght; i++){
        return catalogo.filmes
    }
}

let listarFilmesEmCartaz = catalogo.filmes.filter(function (obj){
    //LISTAR FILMES EM CARTAZ
    return obj.emCartaz == true;
})



function alterarStatusEmCartaz(idFilme, status){
//USAR O .FOREACH .MAP
    for (let i = 0; i < catalogo.filmes.lenght; i++){
catalogo.filmes[i].codigo === codigo ? catalogo.filmes[i].emCartaz = !catalogo.filmes[i].emCartaz : ''
    }
}

