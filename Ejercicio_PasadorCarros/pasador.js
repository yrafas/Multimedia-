var imag = [
        "galeriacarros/img/001.jpg",
        "galeriacarros/img/002.jpg",
        "galeriacarros/img/003.jpg",
        "galeriacarros/img/004.jpg",
        "galeriacarros/img/005.jpg",
        "galeriacarros/img/006.jpg"

];


cont=0
function camca(){
    
    document.getElementById("carros").src=imag[cont];
    cont++;
    if(cont>imag.length-1){cont=0;}
}
