document.body.style.overflow = 'hidden'
let nav = document.getElementsByClassName('nav')[0]
let maxPrice = document.getElementsByClassName('current-max-price')[0]
let slider = document.getElementsByClassName('slider')[0]
const mediaQuery = window.matchMedia('(max-width: 800px) and (max-height: 915px)')
const lupe = document.getElementsByClassName('lupe')[0]
const lupa = document.getElementsByClassName('lupa')[0]
const burger = document.getElementsByClassName('burger')[0]
const leftPart = document.getElementsByClassName('left-part')[0]
const button = document.getElementsByClassName('cat-button')[0]
let productsDiv = document.getElementsByClassName('products')[0]
let productDiv = document.getElementsByClassName('product')
let checkbox = document.getElementsByClassName('checkbox')
let price = document.getElementsByClassName('slider')[0]
const bascet = document.getElementsByClassName('bascet')[0]
const bascetImg = document.getElementsByClassName('bascet_img')[0]
const bascetList = document.getElementsByClassName('bascet__list')[0]
let corzina = document.getElementsByClassName('bascet__list_forbut')[0]
let bascetButton = document.getElementsByClassName('bascet__button')[0]
localStorage.setItem('id', 'none')
let forma = []
let products = []



document.getElementsByClassName('about')[0].onclick = function(){
    window.open(['about.html'])
}




products[0] = {
    name: "Футболка",
    cost: 2000,
    child: true,
    man: true ,
    summer: true,
    index: ['футболка','футболка белая','футболка детская','футболки'],
    description: 'Что то там какой то текст',
    size: ['S','M','L','XL','XXL','XXXL']
}
products[1] = {
    name: "Куртка",
    cost: 2000,
    index: ''
}
products[2] = {
    name: "Юбка",
    cost: 2000,
    index: ['юбка', 'юбка женская','юбка черная'],
    whoman: true
}
products[3] = {
    name: "Свитер",
    cost: 2000,
    index: ['свитер','свитер детский','свитшот','свитшот зимний'],
    winter: true
}
products[4] = {
    name: "Варежки",
    cost: 3500,
    winter: true,
    index: ''
}
products[5] = {
    name: "Колготки",
    cost: 200,
    whoman: true,
    index: ['колготки', 'нижнее белье']
}
products [6] = {
    name: 'Кеды',
    cost: 2500,
    whoman: true,
    man: true,
    shoe: true,
    summer: true, 
    spring: true, 
    index: ['кеды','обувь'],
    child: true,
    description: 'Кеды летние детские удобные. Страна производства - Казахстан. Там еще что нибудь блаблаблаблабла----бла-бла. Кеды хороший',
    color: ['black','white','red'],
    size: ['35', '36', '37', '38', '39', '40', '41', '42',]
}

//


searchProduct = []

let searchProductN = 0 
while (searchProductN != products.length){
    searchProduct[searchProductN] = searchProductN
    searchProductN++
}


function forming(){
    bas = localStorage.getItem('bas')
    bas = bas.split(',')
    forma = []
    let basN = 0
    while (basN<bas.length){
        let base = bas[basN].split('_')
        let Id = base[0]
        let imgName = Id
        if (products[Id].hasOwnProperty('color') == true){
            imgName = `${Id}_${base[1]}`
        }
        let productName = products[Id].name 
        if (products[Id].hasOwnProperty('size') == true){
            let productSize = base[base.length-1]
            productName = `${productName} ${productSize}`
        }
        let productID = Id
        forma[basN] = `${productName}/${imgName}/${products[productID].cost}`
        basN++} }

//



function priceMax(){
    maxPrice.innerHTML = slider.value
}

if (mediaQuery.matches) {
    document.body.style.overflowY = 'auto'
}
let loop = true
document.onkeyup = function(event){
    let searchProductN = 0 
        while (searchProductN != products.length){
            searchProduct[searchProductN] = searchProductN
            searchProductN++
        }

    if (event.keyCode == 13 & lupe == document.activeElement & loop == true){
        loop = false
        lupa.style.animation = 'rotate 0.7s'
        setTimeout(function(){
            lupa.style.animation = 'none'
            loop = true
            }
            , 700)
        let productsN = 0
    while (productsN <= products.length-1){
        productsN++
    }
    let checkboxIndex = 0
    let checkboxN = 0
    while (checkboxIndex<checkbox.length){
        if (checkbox[checkboxIndex].checked){
            let productsN = 0
            checkboxN++
            while (productsN <= products.length-1) {
                let typeCheck = checkbox[checkboxIndex].value
                if (products[productsN].hasOwnProperty(typeCheck) != true){
                    searchProduct[productsN] = 'none'
                }
                productsN++
}  
        }
        checkboxIndex++
    }
    if (checkboxN==0){
        let productsN = 0
        while (productsN <= products.length-1) {
            productsN++
        }
    }
//Фильтры
    productsN = 0
    while (productsN <= products.length-1) {
        if (products[productsN].cost > price.value){
            searchProduct[productsN] = 'none'
        }
        productsN++
}
//Стоимость 
    if (lupe.value!=''){
        let stringLupe = lupe.value.toLowerCase()
        let productsN = 0
        while (productsN <= products.length-1){
            if (Object.values((products[productsN].index)).includes(stringLupe) != true){
                searchProduct[productsN] = 'none'
            }
            productsN++
        }
    }
    searched()
}}

let list = false

button.onclick = function(){
    if (mediaQuery.matches) {
        leftPart.style.left = '-100%'
        list = false
        document.body.style.overflow = 'auto'
}
    let searchProductN = 0 
        while (searchProductN != products.length){
            searchProduct[searchProductN] = searchProductN
            searchProductN++
        }
    let productsN = 0
    while (productsN <= products.length-1){
        productsN++
    }
    let checkboxIndex = 0
    let checkboxN = 0
    while (checkboxIndex<checkbox.length){
        if (checkbox[checkboxIndex].checked){
            let productsN = 0
            checkboxN++
            while (productsN <= products.length-1) {
                let typeCheck = checkbox[checkboxIndex].value
                if (products[productsN].hasOwnProperty(typeCheck) != true){
                    searchProduct[productsN] = 'none'}
                productsN++
}  
        }
        checkboxIndex++
    }
    if (checkboxN==0){
        let productsN = 0
        while (productsN <= products.length-1) {
            productsN++
        }
    }
//Фильтры
    productsN = 0
    while (productsN <= products.length-1) {
        if (products[productsN].cost > price.value){
            searchProduct[productsN] = 'none'
        }
        productsN++
}
//Стоимость 
    if (lupe.value!=''){
        if (loop == true){
            loop = false
            lupa.style.animation = 'rotate 0.7s'
            setTimeout(function(){
            lupa.style.animation = 'none'
            loop = true
            }
            , 700)
        }
        let stringLupe = lupe.value.toLowerCase()
        let productsN = 0
        while (productsN <= products.length-1){
            if (Object.values((products[productsN].index)).includes(stringLupe) != true){
                searchProduct[productsN] = 'none'
            }
            productsN++
        }
    }
    searched()
}

burger.onclick = function(){
    if (list == false){
        leftPart.style.left = '0px'
        list = true
        document.body.style.overflow = 'hidden'
    }
    else if (list == true){
        leftPart.style.left = '-100%'
        list = false
        document.body.style.overflow = 'auto'
    }
    if (loopBascet == true & directionBascet == 'off'){
        bascetImg.style.animation = 'rotate 0.6s'
        loopBascet = false
        directionBascet = 'on'
        setTimeout(function(){
            bascetImg.style.animation = ''
            loopBascet = true
        }, 600)
        bascetList.style.right = '-750%'
    }
}

// Страница продукта
function searched(){
    document.getElementById('products').innerHTML = ""
    let searchedProduct = []
    let searchProductN = 0
    while (searchProductN < searchProduct.length){
        if (searchProduct[searchProductN]!='none'){
            searchedProduct[searchedProduct.length] = searchProduct[searchProductN]
        }
        searchProductN++}
    let productsN = 0
    if (searchedProduct.length <= products.length){
        while (productsN <= searchedProduct.length-1) {
            productNumber = searchedProduct[productsN]
            let product = products[productNumber]
            if (products[productNumber].hasOwnProperty('color') == true){
                productNumber = `${productNumber}_${products[productNumber].color[0]}`
            }
            productsDiv.innerHTML += `<div class="products__product product " id = "${productNumber}">
                        <div class="products__product__obl">
                            <div class="products__product__img product-img">
                                <img src="img/items/${productNumber}.webp" alt="">
                            </div>
                            <div class="products__product__title product-title">${product.name}</div>
                            <div class="products__product__description product-description">Цена: ${product.cost}р</div>
                        </div>
                     </div>`
            productsN++
    }
}
        productDiv = document.getElementsByClassName('product')
        let DivN = 0
        while (DivN < productDiv.length){
            let DivNN = searchedProduct[DivN]
            productDiv[DivN].onclick = function(){
            localStorage.setItem('id', DivNN)
            window.open(['product.html'])}
            DivN++

}
}
let directionBascet = 'on'
let loopBascet = true
bascetImg.onclick = function(){
    if (loopBascet == true & directionBascet == 'on'){
        bascetImg.style.animation = 'rotate 0.6s'
        bascetImg.style.animationDirection = 'reverse'
        loopBascet = false
        directionBascet = 'off'
        setTimeout(function(){
            bascetImg.style.animation = ''
            loopBascet = true
        }, 600)
        bascetList.style.right = '-30%'

    }

    else if (loopBascet == true & directionBascet == 'off'){
        bascetImg.style.animation = 'rotate 0.6s'
        loopBascet = false
        directionBascet = 'on'
        setTimeout(function(){
            bascetImg.style.animation = ''
            loopBascet = true
        }, 600)
        bascetList.style.right = '-750%'
    }
    if (list == true){
        leftPart.style.left = '-100%'
        list = false
        document.body.style.overflow = 'auto'
    }

}

searched()



window.addEventListener('storage', function(e){ 
    bas = localStorage.getItem('bas')
    corzina.innerHTML = ''
    bas = bas.split(',')
    let imgName = ''
    let basN = 0
    forma = []
    while (basN < bas.length){
    if (localStorage.getItem('bas') != '' & localStorage.getItem('bas') != null & localStorage.getItem('bas') != undefined){
        bascetButton.style.display = 'none'
    }
    else{
        bascetButton.style.display = 'flex'
    }
        let corz = bas[basN].split('_')
        basN++
        let productID = corz[0]
        let productName = products[productID].name
        imgName = `${productID}`
        if (products[productID].hasOwnProperty('color')){
            let productColor = corz[1]
            imgName = `${productID}_${productColor}`
        }
        if (products[productID].hasOwnProperty('size')){
            let productSize = corz[corz.length-1]
            productName = `${products[productID].name} ${productSize}`
        }
        corzina.innerHTML += `<div class="bascet__list__item">
                                <div class="bascet__list__img">
                                    <img src="img/items/${imgName}.webp" alt="">
                                </div>
                                <div class="bascet__list__text">
                                    <div class="bascet__list__title">${productName}</div>
                                    <div class="bascet__list__cost">${products[productID].cost}р</div>
                                    <div class="crest"></div>
                                </div>
                            </div>`
        forma[basN-1] = `${productName}/${imgName}/${products[productID].cost}`
    }
   corzina.innerHTML += `<div class="bascet__button no-focus">Оформить заказ</div>`
   document.getElementsByClassName('bascet__button')[0].onclick = function(){
    localStorage.setItem('forma',forma)
    window.open(['form.html'])
}
   cresting()
   forming()
})







if (localStorage.getItem('bas') == '' | localStorage.getItem('bas') == null | localStorage.getItem('bas') == undefined){
        bascetButton.style.display = 'none'

    }


if (localStorage.getItem('bas') != '' & localStorage.getItem('bas') != null & localStorage.getItem('bas') != undefined){
    basNew()
}



function basNew(){
    bas = localStorage.getItem('bas')
    corzina.innerHTML = ''
    bas = bas.split(',')
    let imgName = ''
    let basN = 0
    
    while (basN < bas.length){
    if (localStorage.getItem('bas') == '' | localStorage.getItem('bas') == null | localStorage.getItem('bas') == undefined){
        bascetButton.style.display = 'none'
    }
    else{
        bascetButton.style.display = 'flex'
    }
        
        let corz = bas[basN].split('_')
        basN++
        let productID = corz[0]
        let productName = products[productID].name
        imgName = `${productID}`
        if (products[productID].hasOwnProperty('color')){
            let productColor = corz[1]
            imgName = `${productID}_${productColor}`
        }
        if (products[productID].hasOwnProperty('size')){
            let productSize = corz[corz.length-1]
            productName = `${products[productID].name} ${productSize}`
        }
        corzina.innerHTML += `<div class="bascet__list__item">
                                <div class="bascet__list__img">
                                    <img src="img/items/${imgName}.webp" alt="">
                                </div>
                                <div class="bascet__list__text">
                                    <div class="bascet__list__title">${productName}</div>
                                    <div class="bascet__list__cost">${products[productID].cost}р</div>
                                    <div class="crest"></div>
                                </div>
                            </div>`
        
        
    }
    forming()
    corzina.innerHTML += `<div class="bascet__button no-focus">Оформить заказ</div>`   
    
   document.getElementsByClassName('bascet__button')[0].onclick = function(){
    
    localStorage.setItem('forma',forma)
    window.open(['form.html'])
   
}

forming()



cresting()

function cresting(){
    crest = document.getElementsByClassName('crest')
    crest[0].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[0]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[1].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[1]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[2].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[2]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[3].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[3]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[4].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[4]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[5].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[5]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[6].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[6]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[7].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[7]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[8].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[8]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    crest[9].onclick = function(){
            basic = localStorage.getItem('bas')
            basic = basic.split(',')
            basici = basic[9]
            basic = basic.filter((basic)=> basic!=basici)
            localStorage.setItem('bas', basic)
            basNew()
            cresting()
    }
    
    
}

}