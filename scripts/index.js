
class Activity {
    constructor ({id,title,description,imgUrl}) {
      this.id = id ,
      this.title = title,
      this.description =description,
      this.imgUrl = imgUrl
    }
}

class Repository {
    constructor () {
        this.activities = [];
        this.id=0;
    }
    getAllActivities () {
     return  this.activities;
    } 
    createActivity  (obj)  {
        this.id=this.id+1;
       let valor = new Activity ({...obj,id:this.id});
       this.activities.push(valor)
    };
    deleteActivity (id) {
        let valor1 = this.activities.filter(function (act){
            return act.id !==id;
        })
      this.activities = valor1;
       
    };

};

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


  valor.createActivity({ title: valor1,description:valor2,imgUrl:valor3});

  zocalotitulo.value="";
  zocalodescripcion.value="";
  zocaloimg.value="";


armar2();

}
let boton = document.querySelector("#submit");



boton.addEventListener("click", function (evento){
  evento.preventDefault();
  handler();
});




 

  





