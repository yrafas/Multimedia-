
function cambio(){
    if(document.getElementById('ejercicios').className=="grid"){
    document.getElementById('ejercicios').className="list";
    document.getElementById('btn.lire').innerText="Retícula";
}
    else{
    document.getElementById('ejercicios').className="grid";
    document.getElementById('btn.lire').innerText="Lista";
}
}
