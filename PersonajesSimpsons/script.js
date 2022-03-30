function todo(){
  
document.getElementById("ver").style.display=block
}

var personajes=[[
  "Barney Gumble",
  
   "El borracho de la ciudad. Siempe lo encontrarás en el bar de Moe.",
  
"https://upload.wikimedia.org/wikipedia/en/d/de/Barney_Gumble.png"
],
  [
    "Nelson Muntz",
   
   "Filosofo de la vida y matón de colegio.",
    "https://upload.wikimedia.org/wikipedia/en/c/c6/Nelson_Muntz.PNG"
  ],
  [
    "Ralph Wiggum",
    
   "Niño superdotado.",

    "https://upload.wikimedia.org/wikipedia/en/1/14/Ralph_Wiggum.png"
  ],
 ["Ayudante de Santa Claus",
  "Galgo de la familia Simpsons", "https://upload.wikimedia.org/wikipedia/en/8/8a/SantasLittleHelper.png"],
[
"Bart Simpsons",
  "Hijo de Homero y Marge. Es mala gente.",
  "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
"https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/C-bob.png/220px-C-bob.png"],
  
[
  "Kearney",
  "Va a la misma clase que sus hijos.",
  "https://www.seekpng.com/png/full/69-691491_kearney-zzyzwics-world-on-fxx-simpsons-kearney-zzyzwicz.png"],

["Cerveza Duff",
 
 "Se hace con animales callejeros.",
   "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/AKE_Duff_Beer_IMG_5244_edit.jpg/800px-AKE_Duff_Beer_IMG_5244_edit.jpg"],
  [
 "Homer Simpsons",
  "Le gusta comer y beber.",
  "https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_764HomerSimpsonTHESIMPSONSPIN.png?v=1636667429"],
 [
 "Marge Simpsons",
 "Tiene un pelazo.", "https://i.pinimg.com/originals/c0/12/a4/c012a41f7e191b12979bf6b6d02bb6c6.png"],
  [
 "Lisa Simpsons",
 "Una niña repelente que va de listilla.", "https://i.pinimg.com/originals/c1/4b/ec/c14bec541eade19ac4f8b3a7ec5204bf.png"],
  [
 "Maggie Simpsons",
 "Bebé que caga y mea.", "https://es.seaicons.com/wp-content/uploads/2015/07/Maggie-Simpson-icon.png"
],
                
[
 "Ni idea",
 "No sé quien es.", "https://i0.wp.com/simpsonswiki.com/w/images/1/19/Squeaky-voiced_teen.png"]
];

var texto="";
    
for(var i=0; i<personajes.length; i++){
  texto+="<li><img src='" + personajes[i][2] + "'alt='"+personajes[i][2]+"'>" ;
  texto+="<h2>"+personajes[i][0]+"</h2>";
  texto+="<p>"+personajes[i][1]+"</p></li>";
}
document.getElementById('listado').innerHTML=texto;