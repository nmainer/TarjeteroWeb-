
class Activity {
    constructor (id,title,description,imgUrl) {
      this.id = id ,
      this.title = title,
      this.description =description,
      this.imgUrl = imgUrl
    }
}

class Repository {
    constructor () {
        this.activities = [];
    }
    getAllActivities = () => this.activities
    createActivity = (id,title,description,imgUrl) => {
       let valor = new Activity (id,title,description,imgUrl)
       this.activities.push(valor)
    }
    deleteActivity  (id) {
        let valor1 = this.activities.filter((act) => act.id !== id)
        this.activities = valor1
    }
}









