

let valor = new Repository();



function armar (obj){
  let {title,description,imgUrl}=obj;
  
  let titulo = document.createElement("h3");
  let descripcion=document.createElement("p");
  let imagen=document.createElement("img");
  let tarjeta=document.createElement("div");
  

  titulo.innerHTML=title;
  descripcion.innerHTML=description;
  imagen.src=imgUrl;
  
  tarjeta.classList.add("tarjeta");
  titulo.classList.add("titulo");
  descripcion.classList.add("descripcion");
  imagen.classList.add("imagen");

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(descripcion);
  tarjeta.appendChild(imagen);

  


return tarjeta;
};

 

  
  
  
 
  
  
function armar2 (){
  let contenedor = document.querySelector(".tarjetero");
  
  contenedor.innerHTML="";

valor.getAllActivities().forEach(function (elemento) {
  let tarjeta = armar(elemento);
  tarjeta.addEventListener("click", function () {
    valor.deleteActivity(elemento.id);
    armar2();
  });
  contenedor.appendChild(tarjeta);
});


};




function handler (){

let zocalotitulo = document.querySelector("#miInput");
let zocalodescripcion=document.querySelector("#midescript");
let zocaloimg= document.querySelector("#miurl");
let valor1 = zocalotitulo.value;
let valor2 =  zocalodescripcion.value;
let valor3= zocaloimg.value;
 if(valor1 ==="" || valor2 ==="" || valor3 ===""){
    alert ("debes completar todos los campos");
    return;
  };
let valores = {
  title:valor1,
  description:valor2,
  imgUrl:valor3
}

  valor.createActivity(valores);

  zocalotitulo.value="";
  zocalodescripcion.value="";
  zocaloimg.value="";


armar2();

}
let boton = document.querySelector("#submit");



boton.addEventListener("click", function (event){
  event.preventDefault();
  handler();
});




 

  





