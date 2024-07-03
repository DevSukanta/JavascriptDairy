// const student = {
//     fullName: "Sukanta Dev",
//     marks: 99.0,
//     printMarks: function(){
//         console.log("marks = ", this.marks);
//     }
// }

let DATA = 'secret information';
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", DATA)
    }
}
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "some new value";
    }
}
let std1 = new User("Sukanta", "abc@email.com")
console.log(std1)
let std2 = new User("Shlock", "shlock@email.com")
console.log(std2)
let admin1 = new Admin("admin", "admin@email.com")
console.log(admin1)