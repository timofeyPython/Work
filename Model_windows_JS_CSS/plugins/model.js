function _createModel(options){
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',`
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header"> 
                        <span class="modal-title">Modal-title</span>
                        <span class="modal-close">&times;</span>
                        </div>
                        <div class="modal-body">
                            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempora?</p1>
                            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempora?</p1>
                        </div>       
                        <div class="modal-footer">
                            <button>Okey</button>
                            <button>Cancel</button>
                        </div>    
                    </div>
                </div>
         
    `)
    // с помощью мтода appendChind(modal) помещаем в body
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
$.modal = function(options){
    const $modal = _createModel(options)
    const ANIMATION_SPEED = 200
    let closing = false
    return {
         open(){ 
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
         },
         destroy(){}
        
    }
}

