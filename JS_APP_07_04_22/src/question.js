export class Question{
    static create(question){
    fetch('https://podcastmyjs-default-rtdb.firebaseio.com/questions.json',{
        method:'POST',
        body:JSON.stringify(question),
        headers:{
            'Content-type':'application/json'
            }
        })
        .then(respone=>respone.json())
    }
}