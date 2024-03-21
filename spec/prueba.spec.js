const {Activity,Repository} = require ("../scripts/modelos");

describe("pruebas sobre la clase Repository", function () {
  let elemento;
  afterEach( ()=>{
   elemento = new Repository();
  })

  it("Repository debe ser una clase", function () {
    expect(typeof Repository.prototype.constructor).toBe("function");
  });
  it ("elemento debe ser una instancia de Repository" , ()=>{
    expect( elemento instanceof Repository).toBe(true)
  });
  it ("Repository debe poseer el metodo getAllActivities", function (){
    expect(elemento.getAllActivities).toBeDefined()
  });
  it ("Repository debe poseer el metodo createActivity", function (){
    expect(elemento.createActivity).toBeDefined()
  });
  it ("Repository debe poseer el metodo deleteActivity",function (){
    expect(elemento.deleteActivity).toBeDefined()
  });
  it("el metodo createActivity debe agregar una actividad", function(){

    let nuevactividad = {
      
      title: "nico",
      description: "jugar",
      imgUrl :"https://.."
    }

    elemento.createActivity({title:nuevactividad.title, description:nuevactividad.description, imgUrl:nuevactividad.imgUrl});

    let elemento2 = new Activity ({
      id:1,
      title:nuevactividad.title,
      description: nuevactividad.description,
      imgUrl: nuevactividad.imgUrl
    });


    expect(elemento.getAllActivities()).toEqual([elemento2]);

  });

});


