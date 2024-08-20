

let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

function ajusteTela () {
   
    largura = window.innerWidth;  
    altura = window.innerHeight; 

    console.log(largura, altura);

}

ajusteTela();

let cronometro = setInterval( function() {

    tempo -= 1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosca);
       window.location.href="index-vitoria.html";

    }else {
    document.getElementById("cronometro").innerHTML = tempo;
    }   
    
}, 1000);



function positonRondom () {

    if(document.getElementById("mosca")) {
        document.getElementById("mosca").remove();

        if (vidas > 3) {
           window.location.href = "fim_de_Jogo.html";

        }else{
        document.getElementById("v" + vidas).src="imge/coracao_vazio.png"
        vidas++;
        }
    }

    let positionX = Math.floor(Math.random() * largura) - 90;
    let positionY = Math.floor(Math.random() * altura) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;
    
    console.log(positionX, positionY);


     let mosca = document.createElement("img");

      mosca.src = "imge/mosca.png";
      mosca.className = tamanhoAleatorio() + " " + ladoAleatorio();
      mosca.style.left = positionX + "px";
      mosca.style.top = positionY + "px";
      mosca.style.position = "absolute";
      mosca.id = "mosca";
      mosca.onclick = function () {
        this.remove();
      }

     

     document.body.appendChild(mosca);

   

}

function tamanhoAleatorio () {

    let tamanho = Math.floor(Math.random() * 3);

    switch(tamanho) {
        case 0:
            return "mosca"

        case 1:
            return "mosca2"

        case 2:
            return "mosca3" 
    
            
    }
}

function ladoAleatorio () {

    let lado = Math.floor(Math.random() * 2);

    switch(lado) {
        case 0:
            return "ladoA"

        case 1:
            return "ladoB"     
            
    }

}