document.body.style.overflowX = 'hidden'
localStorage.getItem('id')
let ID = 'none'
let title = document.getElementsByClassName('upper-block__text__title')[0]
let description = document.getElementsByClassName('upper-block__text__description')[0]
let cost = document.getElementsByClassName('upper-block__text__cost')[0]
let img = document.getElementsByClassName('upper-block__img')[0]
let IMG = document.getElementsByClassName('upper-block__img_img')[0]
let colorsDiv = document.getElementsByClassName('colors')[0]
let sizes = document.getElementsByClassName('list')[0]
let lis = document.getElementsByClassName('lis')[0]
let button = document.getElementsByClassName('button')[0]
let front = document.getElementsByClassName('first-part')[0]
let back = document.getElementsByClassName('second-part')[0]
if (localStorage.getItem('id')!='none'){
	ID = localStorage.getItem('id')
	sessionStorage.setItem('id', ID)
	localStorage.setItem('id','none')
}else if (localStorage.getItem('id')=='none') {
	ID = sessionStorage.getItem('id')
}

back.style.transform = 'rotateX(-180deg)'

let products = []



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


if (products[ID].hasOwnProperty('size') == true){
    lis.style.display = 'flex'
    let sizing = 0
    while (sizing<products[ID].size.length){
        sizes.innerHTML += `<option value="${products[ID].size[sizing]}">${products[ID].size[sizing]}</option>`
        sizing++
    }
}

//



//

title.innerHTML = products[ID].name
description.innerHTML = products[ID].description
cost.innerHTML = `${products[ID].cost} Р`
let imgID = ID
img.innerHTML = `<img src="img/items/${imgID}.webp" alt="" class="upper-block__img_img">`
if (products[ID].hasOwnProperty('color') == true){
    img.innerHTML = `<img src="img/items/${imgID}_${products[ID].color[0]}.webp" alt="" class="upper-block__img_img">`
}
let colorN = 1

if (products[ID].hasOwnProperty('child') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/child.webp" alt="">
                            </div>
                            <div class="categ__text">Детское</div>
                        </div>`
}
if (products[ID].hasOwnProperty('man') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/man.webp" alt="">
                            </div>
                            <div class="categ__text">Мужское</div>
                        </div>`
}
if (products[ID].hasOwnProperty('whoman') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/whoman.webp" alt="">
                            </div>
                            <div class="categ__text">Женское</div>
                        </div>`
}
if (products[ID].hasOwnProperty('acses') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/acses.webp" alt="">
                            </div>
                            <div class="categ__text">Аксессуары</div>
                        </div>`
}
if (products[ID].hasOwnProperty('shoe') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/shoe.webp" alt="">
                            </div>
                            <div class="categ__text">Обувь</div>
                        </div>`
}
if (products[ID].hasOwnProperty('winter') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/winter.webp" alt="">
                            </div>
                            <div class="categ__text">Зимнее</div>
                        </div>`
}
if (products[ID].hasOwnProperty('summer') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/summer.webp" alt="">
                            </div>
                            <div class="categ__text">Летнее</div>
                        </div>`
}
if (products[ID].hasOwnProperty('spring') == true){
    document.getElementsByClassName('categories')[0].innerHTML += `<div class="categ no-focus">
                            <div class="categ__img">
                                <img src="img/categories/spring.webp" alt="">
                            </div>
                            <div class="categ__text">Демисезонное</div>
                        </div>`
}

let bas = ''

basing()

function basing(){
    if (localStorage.getItem('bas') != '' & localStorage.getItem('bas') != null & localStorage.getItem('bas') != undefined){
        bas = localStorage.getItem('bas')
        bas = bas.split(',')
        console.log(bas)}

    else{
        bas = []
    }
}

let currentColor = ''
if (products[ID].hasOwnProperty('color') == true){
    currentColor = products[ID].color[0]
}



let productString = ''

button.onclick = function(){
    productString = `${ID}`
    if (products[ID].hasOwnProperty('color') == true){
        productString += `_${currentColor}`
    }
    if (products[ID].hasOwnProperty('size') == true){
        productString += `_${sizes.value}`
    }
    

    if (bas.includes(`${productString}`) == false){
        if (bas.length<10){
        bas[bas.length] = productString}
        else
            alert('В корзине не может одновременно находится более 10 товаров')
    }
    else if (bas.includes(`${productString}`) == true){
        bas = bas.filter(function(f) { return f !== `${productString}`})
    }
    localStorage.setItem('bas', bas)
}

butt()
document.getElementsByClassName('main-block')[0].onclick = function(){
    productString = `${ID}`
    if (products[ID].hasOwnProperty('color') == true){
        productString += `_${currentColor}`
    }
    if (products[ID].hasOwnProperty('size') == true){
        productString += `_${sizes.value}`
    }
    if (bas.includes(`${productString}`) == true){
        front.style.transform = 'rotateX(180deg)'
        back.style.transform = 'rotateX(0deg)'
    }
    if (bas.includes(`${productString}`) == false){
        front.style.transform = 'rotateX(0deg)'
        back.style.transform = 'rotateX(-180deg)'
    }
}


sizes.addEventListener('change', () => {
    productString = `${ID}`
    if (products[ID].hasOwnProperty('color') == true){
        productString += `_${currentColor}`
    }
    if (products[ID].hasOwnProperty('size') == true){
        productString += `_${sizes.value}`
    }
    if (bas.includes(`${productString}`) == true){
        front.style.transform = 'rotateX(180deg)'
        back.style.transform = 'rotateX(0deg)'
    }
    if (bas.includes(`${productString}`) == false){
        front.style.transform = 'rotateX(0deg)'
        back.style.transform = 'rotateX(-180deg)'
    }
})


function butt(){
    productString = `${ID}`
    if (products[ID].hasOwnProperty('color') == true){
        productString += `_${currentColor}`
    }
    if (products[ID].hasOwnProperty('size') == true){
        productString += `_${sizes.value}`
    }
    if (bas.includes(`${productString}`) == true){
        front.style.transform = 'rotateX(180deg)'
        back.style.transform = 'rotateX(0deg)'
    }
    if (bas.includes(`${productString}`) == false){
        front.style.transform = 'rotateX(0deg)'
        back.style.transform = 'rotateX(-180deg)'
    }
}





window.addEventListener('storage', function(e){ 
    bas = localStorage.getItem('bas')
    bas = bas.split(',')
    basing()
    productString = `${ID}`
    if (products[ID].hasOwnProperty('color') == true){
        productString += `_${currentColor}`
    }
    if (products[ID].hasOwnProperty('size') == true){
        productString += `_${sizes.value}`
    }
    if (bas.includes(`${productString}`) == true){
        front.style.transform = 'rotateX(180deg)'
        back.style.transform = 'rotateX(0deg)'
    }
    if (bas.includes(`${productString}`) == false){
        front.style.transform = 'rotateX(0deg)'
        back.style.transform = 'rotateX(-180deg)'
    }
})






//
let colorsList = []
if (products[ID].hasOwnProperty('color') == true){
    let colorsN = 0 
    while (colorsN<products[ID].color.length){
        colorsList[colorsN] = products[ID].color[colorsN]
        colorsDiv.innerHTML += `<div class="color" id = "color_${products[ID].color[colorsN]}" style = "background-color:${products[ID].color[colorsN]}"></div>`
        colorsN++
    }
}

document.getElementsByClassName('color')[0].onclick = function(){
    let colorN = 0
    if (colorN<products[ID].color.length){
    img.innerHTML = `<img src="img/items/${ID}_${products[ID].color[colorN]}.webp" alt="" class="upper-block__img_img">`
    currentColor = products[ID].color[colorN]
}
}
document.getElementsByClassName('color')[1].onclick = function(){
    let colorN = 1
    if (colorN<products[ID].color.length){
    img.innerHTML = `<img src="img/items/${ID}_${products[ID].color[colorN]}.webp" alt="" class="upper-block__img_img">`
    currentColor = products[ID].color[colorN]
}
}
document.getElementsByClassName('color')[2].onclick = function(){
    let colorN = 2
    if (colorN<products[ID].color.length){
    img.innerHTML = `<img src="img/items/${ID}_${products[ID].color[colorN]}.webp" alt="" class="upper-block__img_img">`
    currentColor = products[ID].color[colorN]
}
}
document.getElementsByClassName('color')[3].onclick = function(){
    let colorN = 3
    if (colorN<products[ID].color.length){
    img.innerHTML = `<img src="img/items/${ID}_${products[ID].color[colorN]}.webp" alt="" class="upper-block__img_img">`
    currentColor = products[ID].color[colorN]
}
}
document.getElementsByClassName('color')[4].onclick = function(){
    let colorN = 4
    if (colorN<products[ID].color.length){
    img.innerHTML = `<img src="img/items/${ID}_${products[ID].color[colorN]}.webp" alt="" class="upper-block__img_img">`
    currentColor = products[ID].color[colorN]
}
}
document.getElementsByClassName('color')[5].onclick = function(){
    let colorN = 5
    if (colorN<products[ID].color.length){
    img.innerHTML = `<img src="img/items/${ID}_${products[ID].color[colorN]}.webp" alt="" class="upper-block__img_img">`
    currentColor = products[ID].color[colorN]
}
}
