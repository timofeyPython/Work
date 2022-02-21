const person = Object.create(
    {
        calculateAge(){
            console.log('Age',new Date().getFullYear()-this.birthYear)
        }

    },
    {
    name:{
        value:'Timofey',
        enumerable: true,
        writable: true,
        configurable: true  
    },
    birthYear:{
        value:1996,
        enumerable: false,
        writable: false
    },
    age:{
        get (){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            document.body.style.background ='red'
            console.log('set age',value)
        }
    }
 }
)
// person.name = 'Max' 

for (let key in person){
    if(person.hasOwnProperty(key)){
        console.log('key',key, person[key])
    }
    
}