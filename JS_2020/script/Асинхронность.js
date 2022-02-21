console.log('start')
console.log('start2')

window.setTimeout(function() {
    console.log('Произойдет через 2 секунды')
},2000)

console.log('end')

function time2seconds(){
    console.log('aaaa ,какой же ты мудак')
}

setTimeout(time2seconds,3000)

