import {isValid} from "./utils";
import './style.css'


const form = document.getElementById('form')
//когда селектор #
const input = document.querySelector('#question-input')
const submitBtn = document.querySelector('#submit')


form.addEventListener('submit', submitFormHandler)

function submitFormHandler  (event) {
    event.preventDefault()
    // вызываем валидатор ,если объект валидный
    if(isValid(input.value)){
        const question = {
            //trim удаляем лишние пробелы
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        // Async request to server to save question
    }
}