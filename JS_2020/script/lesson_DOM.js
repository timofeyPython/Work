// window.prompt('What your name?')

// window.setInterval(console.log('Hello'),5000)
 
const  heading = document.getElementById('hello')
// const  heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h-2class')[0]
const heading2 = document.querySelector('#sub_hello')
const h2list = document.querySelectorAll('h2')
// console.dir(h2list)
const heading3 = h2list[h2list.length - 1]
// console.log(heading3)
// console.dir(heading.textContent)

setTimeout(() => {
    addStyleTo(heading,'one')
},2000 ) 

const link = heading3.querySelector('a')
link.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('click on lINK',event.target)
})
setTimeout(() => {
    addStyleTo(link,'three','green')
},5000 )
setTimeout(() => {
    addStyleTo(heading2,'two','blue','5rem')
},3000 )

function addStyleTo(node,text,color = 'red',fontSize){
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center '
    node.style.background = 'black '
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy:'',undef ,null ,0,false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick  = () =>{
    if (heading.style.color === 'red'){
        heading.style.color ='#000'
        heading.style.backgroundColor  = '#00FF7F'
    }else{
        heading.style.color ='red'
        heading.style.background ='#000'
    }
}
 
heading2.addEventListener('dblclick', () =>{
    if (heading2.style.color === 'blue'){
        heading2.style.color ='#000'
        heading2.style.backgroundColor  = '#00FF7F'
    }else{
        heading2.style.color ='#00FFFF'
        heading2.style.background ='#000'
    }
})


