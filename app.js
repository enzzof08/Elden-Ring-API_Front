'use strict'

async function preencherItens() {
    const conteudo = document.getElementById('conteudo')
    const itens = await getItens()

    const imagens = itens.map(criarImagemI)
    conteudo.replaceChildren(...imagens)
}


function criarImagemI(item) {
    if (!item.image) {
        return document.createElement('div')
    }
    const img = document.createElement('img')
    img.src = item.image
    img.className = 'foto'

    img.addEventListener('click', () => {
        mostrarInfo(item)
    })

    return img

}


async function getItens() {
    const url = 'https://eldenring.fanapis.com/api/items?limit=18'
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}

async function mostrarInfo(item) {
    const conteudo = document.getElementById('conteudo')
    const info = document.createElement('div')
    info.className = 'info'
    info.style.gridColumn = '1 / 7'

    const nome = document.createElement('h1')
    nome.textContent = item.name

    const imagem = document.createElement('img')
    imagem.src = item.image

    const descricao = document.createElement('h2')
    descricao.textContent = item.description

    const tipo = document.createElement('h3')
    tipo.textContent = `Type: ${item.type}`

    const efeito = document.createElement('h3')
    efeito.textContent = `Effect: ${item.effect}`
 
    info.append(nome,imagem, descricao,tipo,efeito)
    conteudo.replaceChildren(info)

}



////////////////////////////

async function preencherBosses() {
    const conteudo = document.getElementById('conteudo')
    const bosses = await getBosses()
    const imagens = bosses.map(criarImagemB)
    conteudo.replaceChildren(...imagens)

}


function criarImagemB(item) {
    if (!item.image) {
        return document.createElement('div')
    }
    const img = document.createElement('img')
    img.src = item.image
    img.className = 'foto'

    img.addEventListener('click', () => {
        mostrarInfoB(item)
    })

    return img

}

async function mostrarInfoB(item) {
    const conteudo = document.getElementById('conteudo')
    const info = document.createElement('div')
    info.className = 'info'
    info.style.gridColumn = '1 / 7'

    const nome = document.createElement('h1')
    nome.textContent = item.name

    const imagem = document.createElement('img')
    imagem.src = item.image

    const descricao = document.createElement('h2')
    descricao.textContent = item.description

    const localizacao = document.createElement('h3')
    localizacao.textContent = `Location: ${item.location}`

    const drop = document.createElement('h3')
    drop.textContent = `Drops: ${item.drops.join(', ')}`

    const vida = document.createElement('h3')
    vida.textContent = `HealthPoints: ${item.healthPoints}`
 
    info.append(nome,imagem, descricao, localizacao, drop,vida)
    conteudo.replaceChildren(info)

}


async function getBosses(){
    const url = 'https://eldenring.fanapis.com/api/bosses?limit=18'
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}

//////////////////////////


async function preencherWeapons(){
    const conteudo = document.getElementById('conteudo')
    const weapons = await getWeapons()
    const imagens = weapons.map(criarImagemW)
    conteudo.replaceChildren(...imagens)
}

async function getWeapons(){
    const url = 'https://eldenring.fanapis.com/api/weapons?limit=18'
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}

function criarImagemW(item) {
    if (!item.image) {
        return document.createElement('div')
    }
    const img = document.createElement('img')
    img.src = item.image
    img.className = 'foto'

    img.addEventListener('click', () => {
        mostrarInfoW(item)
    })

    return img

}

async function mostrarInfoW(item) {
    const conteudo = document.getElementById('conteudo')
    const info = document.createElement('div')
    info.className = 'info'
    info.style.gridColumn = '1 / 7'

    const nome = document.createElement('h1')
    nome.textContent = item.name

    const imagem = document.createElement('img')
    imagem.src = item.image

    const descricao = document.createElement('h2')
    descricao.textContent = item.description

    const peso = document.createElement('h3')
    peso.textContent = `Weight: ${item.weight}`

    info.append(nome,imagem, descricao, peso)
    conteudo.replaceChildren(info)

}


/////////////////////////////

async function preencherClasses(){
    const conteudo = document.getElementById('conteudo')
    const classes = await getClasses()
    const imagens = classes.map(criarImagemC)
    conteudo.replaceChildren(...imagens)
}

async function getClasses(){
    const url = 'https://eldenring.fanapis.com/api/classes?limit=18'
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}

function criarImagemC(item){
    if (!item.image) {
        return document.createElement('div')
    }
    const img = document.createElement('img')
    img.src = item.image
    img.className = 'foto'

    img.addEventListener('click', () => {
        mostrarInfoC(item)
    })

    return img

}

async function mostrarInfoC(item) {
    const conteudo = document.getElementById('conteudo')
    const info = document.createElement('div')
    info.className = 'info'
    info.style.gridColumn = '1 / 7'

    const nome = document.createElement('h1')
    nome.textContent = item.name

    const imagem = document.createElement('img')
    imagem.src = item.image

    const descricao = document.createElement('h2')
    descricao.textContent = item.description


    info.append(nome,imagem, descricao)
    conteudo.replaceChildren(info)

}


/////////////////////////////////


async function preencherSpirits(){
    const conteudo = document.getElementById('conteudo')
    const spirits = await getSpirits()
    const imagens = spirits.map(criarImagemS)

    conteudo.replaceChildren(...imagens)
}

async function getSpirits(){
    const url = 'https://eldenring.fanapis.com/api/spirits?limit=18'
    const response = await fetch(url)
    const data = await response.json()
    return data.data
}

function criarImagemS(item){
    if (!item.image) {
        return document.createElement('div')
    }
    const img = document.createElement('img')
    img.src = item.image
    img.className = 'foto'

    img.addEventListener('click', () => {
        mostrarInfoS(item)
    })

    return img

}

async function mostrarInfoS(item) {
    const conteudo = document.getElementById('conteudo')
    const info = document.createElement('div')
    info.className = 'info'
    info.style.gridColumn = '1 / 7'

    const nome = document.createElement('h1')
    nome.textContent = item.name

    const imagem = document.createElement('img')
    imagem.src = item.image

    const descricao = document.createElement('h2')
    descricao.textContent = item.description

    const efeito = document.createElement('h3')
    efeito.textContent = `Effect: ${item.effect}`

    info.append(nome,imagem, descricao, efeito)
    conteudo.replaceChildren(info)

}

document.getElementById('items').addEventListener('click', preencherItens)
document.getElementById('bosses').addEventListener('click', preencherBosses)
document.getElementById('weapons').addEventListener('click', preencherWeapons)
document.getElementById('classes').addEventListener('click', preencherClasses)
document.getElementById('spirits').addEventListener('click', preencherSpirits)