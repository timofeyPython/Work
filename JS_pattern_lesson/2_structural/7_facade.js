if (!Date.prototype.toISOString) {
    (function() {
  
      function pad(number) {
        if (number < 10) {
          return '0' + number;
        }
        return number;
      }
  
      Date.prototype.toISOString = function() {
        return this.getUTCFullYear() +
          '-' + pad(this.getUTCMonth() + 1) +
          '-' + pad(this.getUTCDate()) +
          'T' + pad(this.getUTCHours()) +
          ':' + pad(this.getUTCMinutes()) +
          ':' + pad(this.getUTCSeconds()) +
          '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
          'Z';
      };
  
    }());
  }
class Complaints{
    constructor(){
        this.complaints = []
    }

    reply(complaint){}

    add(complaint){
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints{
    reply({id,customer,details}){
        return `Product:${id}:${customer} (${details})`
    }
}
class ServiceComplaints extends Complaints{
    reply({id,customer,details}){
        return `Service:${id}:${customer} (${details})`
    }
}

class ComplaintRegistry{
    register(customer,type,details){
        const id = new Date().toISOString()
        let complaint 
        type == 'service' ? complaint = new ProductComplaints() : complaint = new ServiceComplaints()
       return complaint.add({id,customer,details})
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('tima','service','недоступен'))
console.log(registry.register('Dima','Nolac','No#$'))

