class User {
    constructor (name, email){
        this.name = name;
        this.email = email;
    }
    courseLIst = [];

    getInfo(){
        return {name : this.name, email: this.email};
    }

    enrollCourse(name){
        this.courseLIst.push(name);
    }

    getCourseList(){
        return this.courseLIst;
    }
}

module.exports = User;

