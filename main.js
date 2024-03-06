const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.lenght;i++){
    botoes[i].onclick = function(){
        botoes[i].classList.add("ativo")

        for(let j=0;j<botoes.lenght;j++){
            botoes[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");
    } 
    console.log(botoes[i]);
}