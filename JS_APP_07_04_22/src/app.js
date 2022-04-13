import {isValid} from "./utils";
import './style.css'
import  {Question} from "./question"


const form = document.getElementById('form')
//когда селектор #
const input = document.querySelector('#question-input')
const submitBtn = document.querySelector('#submit')


form.addEventListener('submit', submitFormHandler)
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