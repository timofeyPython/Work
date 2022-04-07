let products = [
    {id:1, title:'Блины', price:10 ,src :'https://s1.1zoom.ru/big7/224/Pancake_Strawberry_Berry_Blueberries_563501_2560x1706.jpg'},
    {id:2, title:'Курочка', price:12 ,src :'https://get.pxhere.com/photo/food-meal-meat-chicken-dinner-vegetable-dish-fried-potato-cooking-cooked-vegetables-roasted-lunch-pan-baked-salad-potatoes-healthy-pork-plate-tomato-cuisine-grilled-onion-produce-ingredient-garden-salad-tableware-recipe-kitchen-utensil-whole-food-leaf-vegetable-cutlery-root-vegetable-dishware-local-food-natural-foods-chicken-meat-vegan-nutrition-pear-fork-vegetarian-food-kitchen-knife-bowl-side-dish-garnish-staple-food-Food-group-superfood-Iceburg-lettuce-herb-greek-food-greek-salad-brunch-cruciferous-vegetables-knife-cucumber-pakistani-cuisine-1634384.jpg'},
    {id:3, title:'Пицца', price:13 ,src :'https://s1.1zoom.ru/b5050/30/377738-sepik_3840x2400.jpg'}
    
]

const toHTML = product => `
    <div class="col">
    <div class="card">
        <img  class="card-img-top" style ="height: 300px; " src="${product.src}" alt ="${product.title}">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <a href="#" class="btn btn-primary" data-btn="price"  data-id=${product.id}>Просмотр цены</a>
        <a href="#" class="btn bbtn btn-info" data-btn="price"  data-id=${product.id}>Изменить</a>
        <a href="#" class="btn btn-danger"  data-btn="delete" data-id=${product.id} >Удалить</a>
        </div>
    </div>
</div>
 `
// для показа данных из products
function render(){
    const html = products.map(elem=>toHTML(elem)).join('')
    document.querySelector('#products').innerHTML = html
}
 
render()
  
const modal  = $.modal({
    title: 'Timofey Modal',
    closable: true,
    content: `
    <p>lorem ipsum dolor sit.</p>
    <p>lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons:[
        {
            text: 'Ok',
            type: 'primary',
            handler(){
                console.log('Primary btn clicked')
            modal.close()
        }},

        {
            text: 'Cancel',
            type: 'danger',
            handler(){
                console.log('Danger btn clicked')
            modal.close()
        }},
    ]
})

const priceModal  = $.modal({
    title: 'Цена за продукт',
    closable: true,
    width: '400px',
    footerButtons:[
        {
            text: 'Ok',
            type: 'primary',
            handler(){
                priceModal.close()
        }}       
    ]
})


 

//  получаем доступ
 document.addEventListener('click',event=>{
     event.preventDefault() //дефолтное сообщение офф
    const btnType = event.target.dataset.btn//таргет к кнопке
    const id = +event.target.dataset.id // доступ к id ToHTML // преобразование  к числу + 
    const product = products.find(f => f.id === id)

    if (btnType ==='price'){ 
    priceModal.setContent(`
    <p>Цена на ${product.title}:<strong>${product.price}$</strong></p>
    `)
    priceModal.open()
    }else if (btnType ==='delete'){
         $.confirm({
             title:'вы уверены?',
             content:`<p> Вы удаляете еду <strong>${product.title}</strong> </p>`

         }).then(()=>{
             products = products.filter(f=> f.id !==id)
             render()
         }).catch( ()=>{
             console.log('кансел')
         }) 
    }
  
 })