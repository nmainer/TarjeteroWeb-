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

  module.exports = {Activity,Repository};