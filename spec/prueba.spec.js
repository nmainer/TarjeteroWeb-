const {Activity,Repository} = require ("../scripts/modelos");

describe("pruebas sobre la clase Repository", function () {
  afterEach( ()=>{
    elemento = new Repository();
  })

  it("Repository debe ser una clase", function () {
    expect(typeof Repository.prototype.constructor).toBe("function");
  });
  it ("elemento debe ser una instancia de Repository" , ()=>{
    expect( elemento instanceof Repository).toBe(true)
  })
  it ("Repository debe poseer el metodo getAllActivities",()=>{
    expect(elemento.getAllActivities).toBeDefined()
  })
  it ("Repository debe poseer el metodo createActivity",()=>{
    expect(elemento.createActivity).toBeDefined()
  })
  it ("Repository debe poseer el metodo deleteActivity",()=>{
    expect(elemento.deleteActivity).toBeDefined()
  })

});


