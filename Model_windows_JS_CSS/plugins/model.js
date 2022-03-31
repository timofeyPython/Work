Element.prototype.appendAfter = function(elements){
    elements.parentNode.insertBefore(this, elements.nextSibling);   
}

function noop(){}


function _createModalFooter(buttons = []){
    if (buttons.length === 0){
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    buttons.forEach(btn =>{
        const $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`)
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })
    return wrap
}



function _createModel(options){
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay" data-close=true >
            <div class="modal-window">
                <div class="modal-header" style="width: ${options.width|| DEFAULT_WIDTH}"> 
                        <span class="modal-title">${options.title || 'окно'}</span>
                        ${options.closable ?`<span class="modal-close" data-close = true>&times;</span>` : ''}
                        </div>
                        <div class="modal-body" data-content>
                            ${options.content || ''}
                            </div>
                        
                    </div>
                </div>
         
    `)
    // с помощью мтода appendChind(modal) помещаем в body

    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}
/*
title: string
closable:boolean
content: string
width: string ('400px')
destroy(): void
окно должно закрываться 

************
setContent(html:string): void |Public
onClose(): void
beforeClose:boolean 
--
animate.css
*/
 
 
// document.addEventListener('DOMContentLoaded', function() {
//     const close = function() {
//         this.closest('.vmodal').style.display = 'none';
//     }
//     let elements = document.querySelectorAll('.modal-close,.button_close,.vmodal' );
     
//     for (let e of elements) {
//         e.addEventListener('click', close);
//     }
// }); 
 

$.modal = function(options){

    const $modal = _createModel(options)
    const ANIMATION_SPEED = 200
    let closing = false
    let destoyed = false
    const modal = {
        open(){ 
            if(destoyed){
                return console.log(`Modal in destroyed`)
            }
            !closing && $modal.classList.add('open')
        },
         close(){
             closing = true
             $modal.classList.remove('open')
             $modal.classList.add('hide')
             setTimeout(()=>{
                $modal.classList.remove('hide')
                closing = false
             },ANIMATION_SPEED)
         }
    }

    const listener = event =>{
        if (event.target.dataset.close){
            modal.close()
             
        }
    }

 

    $modal.addEventListener('click',listener)
 
    // копирование из одного объекта в другой c добавлением
    return Object.assign(modal,{
        destroy(){
            // удаляет модлаку в дом дереве 
            $modal.parentNode.removeChild($modal)
            // делаем ,чтобы убедится ,что не будет утечки памяти
            $modal.removeEventListener('click',listener)
            destoyed = true
        },
    setContent(html){
        $modal.querySelector('[data-content]').innerHTML = html
    }

    })
} 

 
 
 