'use strict'

function criarImagem(item){
    if(!item.image){
        return document.createElement('div')
    }
    const img = document.createElement('img')
    img.src = item.image 
    img.className = 'foto'

    return img
        
}


async function getItens(){
    const url = 'https://eldenring.fanapis.com/api/items?limit=30'
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}


 async function preencherItens(){
    const conteudo = document.getElementById('conteudo')
    const itens = await getItens()

    const imagens = itens.map(criarImagem)
    // console.log(itens)
    conteudo.replaceChildren(...imagens)
}

async function preencherBosses(){

}

document.getElementById('items').addEventListener('click', preencherItens)
document.getElementById('bosses').addEventListener('click', preencherBosses)