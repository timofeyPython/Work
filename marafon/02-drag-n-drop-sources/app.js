const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)//говорит когда начинаем перетаскивать(что должно происходить)
item.addEventListener('dragend', dragend)  //(когда закончили)

for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover',dragover)
   placeholder.addEventListener('dragenter',dragenter)
   placeholder.addEventListener('dragleave',dragleave)
   placeholder.addEventListener('drop',dragdop)
}

function dragstart(event){
    event.target.classList.add('hold') // добавить стиль
    setTimeout(()=>event.target.classList.add('hide'),0)//classlist позв манипул 
    
}

function dragend(event){
 //   event.target.classList.remove('hold','hide')//удаление красной обводки
    event.target.className = 'item' //сокращенный вариант для удаление hold hide
}

function dragover(event){
    event.preventDefault()
//  console.log('drag over')
}

function dragenter(event){
    event.target.classList.add('hovered')
    console.log('drag enter')
}  

function dragleave(event){
    event.target.classList.remove('hovered')
  
}

function dragdop(event){
    event.target.append(item) 
    event.target.classList.remove('hovered')
}
