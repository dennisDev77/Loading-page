function imgSlider(imagem){
    let pegarImagem=document.getElementById("img-top")

    pegarImagem.src=imagem
}

function corFundo(cor){
    let fundo=document.getElementById("corFundo")

    fundo.style.background=cor
}

function mobile(){
    let mobile=document.getElementById("mobile")

    mobile.classList.add('open')
}

function closeMobile(){
    let mobile=document.getElementById("mobile")
    mobile.classList.remove('open')
}