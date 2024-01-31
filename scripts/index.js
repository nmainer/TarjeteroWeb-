
class Activity {
    constructor (id,title,description,imgUrl) {
        this.id= id;
        this.title =title;
        this.description = description;
        this.imgUrl= imgUrl

    }
}


class Repository {
    constructor () {
     this.activities = [];
    }
    getAllActivities () {
        return this.activities;
    }
    createActivity(id,title,description,imgUrl) {
        const instancia = new Activity (id,title,description,imgUrl)
        this.activities.push(instancia)
        return this.activities;
    }
    deleteActivity(id){
      this.activities = this.activities.filter ((activities) => activities.id !== id )
    }
}

