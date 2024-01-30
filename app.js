
let numeroSecreto = 0;
let intentos=0;
let listaNumeroSorteados =[];
let numeroMaximo=10;


function asignarTextoElemento(elemento, texto){

    let elementoHtml =document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return;
    
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
        
    if(numeroDeUsuario==numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'} `);
        //aqui se activa la caja de nuevo juego luego de acertar 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //el usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor');   
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';


}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!')
    asignarTextoElemento('p',`Indique un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos=1;

}

function generarNumeroSecreto() {
   let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 


   if(listaNumeroSorteados.length==numeroMaximo){

    asignarTextoElemento('p','Ya se sortearon todo los numeros posibles');


   }
   else{

//si el numero generado esta en la lista
    if( listaNumeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

   }else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
   }

     
}

    
   }

   

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}


condicionesIniciales();
