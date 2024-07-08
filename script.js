let valorActual = "";
let operador ="";
let valorAnterior= "";

function numero(num){
    valorActual += num ;
    document.getElementById('pantalla').value = valorActual;
}

function operadorNuevo(op){
    if (valorActual==='') return;
    operador=op;
    valorAnterior = valorActual;
    valorActual="";
    document.getElementById('pantalla').value = '';
}

function CalcularResultado(){
    if (valorActual===''|| valorAnterior===''|| operador==='') return;
    let result;
    switch(operador){
        case '+':
            result = parseFloat(valorAnterior)+parseFloat(valorActual);
            break;
        case '-':
            result = parseFloat(valorAnterior)-parseFloat(valorActual);
            break;
        case '*':
            result = parseFloat(valorAnterior)*parseFloat(valorActual);
            break;
        case '/':
            result = parseFloat(valorAnterior)/parseFloat(valorActual);
            break;
        
    }

document.getElementById('pantalla').value = result;
valorActual = result.toString();

operador = '';
valorAnterior ='';

}

function limpiarPantalla(){
    valorActual = '';
    valorAnterior = '';
    operador = '';
    
    document.getElementById('pantalla').value = ''

}