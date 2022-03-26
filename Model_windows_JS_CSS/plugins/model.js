function _createModel(options){
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',`
        <div id = "modal_overlay" class="modal-overlay">
            <div id='moda_window' class="modal-window">
                <div class="modal-header"> 
                        <span id = 'title_id' class="modal-title">Modal-title</span>
                        <span id = 'modal_close' class="modal-close">&times;</span>
                        </div>
                        <div class="modal-body">
                            <p1 id = 'lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempora?</p1>
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

        title(string){
            let a = document.getElementById('title_id')
            if (a !== undefined){
                a.innerText = string
            }
         },
        closable(options){
            options ? $modal.classList.add('close_hide') : $modal.classList.add('close_open')
        },
        content(string){
            let a = document.getElementById('lorem')
            if (a !== undefined){
                a.innerText = string
            }
        },
        width(string){
            let a = document.getElementById('moda_window').style.width=string+'px'
            return a
        },

         destroy(){
            let e = document.querySelectorAll('.vmodal')
            let a =(elms)=>[...elms].forEach(el=>el.remove())
            console.log('Див удалён')
            return a(e)  
         },
        //  ----закрытие модалки на крестик
        close_plus(){

        },
        close_energy(){
            
              }
               
          
    }

} 



 