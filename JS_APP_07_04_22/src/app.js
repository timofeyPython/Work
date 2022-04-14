import {createModal, isValid} from "./utils"
import  {Question} from "./question"
import {authWithEmailAndPassword, getAuthForm} from "./auth"
import './style.css'

const form = document.getElementById('form')
//когда селектор #
const input = document.querySelector('#question-input')
const submitBtn = document.querySelector('#submit')
//получаем кнопочку
const modalBtn  = document.getElementById('model-btn')

//загрузка из local
window.addEventListener('load',Question.renderList)
form.addEventListener('submit', submitFormHandler)
modalBtn.addEventListener('click',openModal)
input.addEventListener('input',()=>{
    submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler  (event) {
    event.preventDefault()
    // вызываем валидатор ,если объект валидный
    if(isValid(input.value)){
        const question = {
            //trim удаляем лишние пробелы
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitBtn.disable = true
        // Async request to server to save question
        Question.create(question).then(()=>{
            //очищение лейбла от забитого слова
            input.value = ''
            input.className = ''
            submitBtn.disable = false

        })

    }
}

function openModal(){
    createModal('Авторизация',getAuthForm())
    document
        .getElementById('auth-form')
        .addEventListener('submit',authFormHandler,{once: true})//событие один раз выполняется
}

function authFormHandler(event){
    event.preventDefault()

    const btn = event.target.querySelector('button')
    const email = event.target.querySelector('#email').value
    const pass  = event.target.querySelector('#password').value

    btn.disable = true
    authWithEmailAndPassword(email,pass)
        // .then(token=>{
        //     return Question.fetch(token)
        // })длинный вариант
        .then(Question.fetch)
        .then(renderModalAfterAuth)
        .then(()=>btn.disabled = false)
}

function renderModalAfterAuth(content){
    if (typeof content ==='string'){
        createModal('ошибка!!',content)
    }else {
        createModal('Список вопросов',content)
    }
}