function somar (valorA,valorB){
    return parseInt(valorA)+parseInt(valorB);
}

document.querySelector("#calcular").addEventListener("click",function(){
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;

    if(valorA.length >0 && valorB >0){
    alert(somar(valorA,valorB))
    document.getElementById('valorA').value = '';
    document.getElementById('valorB').value = '';
    }
    else
    alert("valores invalidos")
});