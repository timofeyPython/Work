export class Question{
    static create(question){
    return fetch('https://podcastmyjs-default-rtdb.firebaseio.com/questions.json',{
        method:'POST',
        body:JSON.stringify(question),
        headers:{
            'Content-type':'application/json'
            }
        })
        .then(respone=>respone.json())
        .then(response=>{
            question.id = response.name
            return question
        })
        .then(addToLocalStorage)
        .then(Question.renderList)
    }
    static  renderList(){
        const questions = getQuestionsFromLocaleStorage()
        const html = questions.length ? questions.map(toCard).join('')
            : `<div class="mui&#45;&#45;text-headline">Вы пока не задали вопросов</div>`
            const list = document.getElementById('list')
        list.innerHTML = html
    }
}

function addToLocalStorage(question){
    const all = getQuestionsFromLocaleStorage()
    all.push(question)
    localStorage.setItem('question',JSON.stringify(all))
}
function getQuestionsFromLocaleStorage(){
    return JSON.parse(localStorage.getItem('question') || '[]')
}

function toCard(question){
    return `<div class="mui&#45;&#45;text-black-54">
            ${new Date(question.date).toLocaleDateString()}
            ${new Date(question.date).toLocaleTimeString()}                
            </div>
            <div>${question.text}</div>
            <br>`
}