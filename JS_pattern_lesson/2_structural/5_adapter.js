class OldCal{
    operation(t1,t2, operation){
        switch(operation){
            case'add': return t1 + t2
            case'sub': return t1 - t2
            default: return NaN
        }    
    }
}

class NewCalc{
    add(t1,t2){
        return t1 + t2
    }
    sub(t1,t2){
        return t1 - t2
    }
}
// используем адаптеры (часто используют с API старыми и новыми ,чтобы не переписывать код)
class CalcAdapter{
    constructor(){
        this.calc  = new NewCalc()
    }

    operation(t1,t2,operation){
        switch(operation){
            case'add': return this.calc.add(t1,t2)
            case'sub': return this.calc.sub(t1,t2)
            default: return NaN
        }  
    }
}

 const newCalc = new NewCalc()
 const oldCalc = new OldCal ()
 const adapter  = new CalcAdapter()
 
console.log(adapter.operation(1,2,'add'))

