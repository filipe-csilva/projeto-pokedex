const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    

if(body.classList.contains("modo-escuro")){
    body.classList.remove("modo-escuro")
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/sun.png")
}else{
    body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/moon.png");
}
})