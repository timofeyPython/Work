class Student{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hi is name ${this.name}`)
    }
}
 
class ProStud{
    university = 'ШАРАГА'
}

 const student = Reflect.construct(Student,['Igoryn',13],ProStud)
//  console.log(student.__proto__ === ProStud.prototype)
// Reflect.apply(student.greet,{name:'Tester',age:15},[])
// console.log(Reflect.ownKeys(student))
 

// Reflect.preventExtensions(student)
// student.age = 25
// console.log(Reflect.isExtensible(student))
// console.log(student)