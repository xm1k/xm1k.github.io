let bas = localStorage.getItem('forma')
let list = document.getElementsByClassName('list')[0]
let plus = document.getElementsByClassName('plus')
let minus = document.getElementsByClassName('minus')
let button = document.getElementsByClassName('butt')[0]
document.body.style.overflowX = 'hidden'
bas = bas.split(',')

let product = ''

list.innerHTML = ''

let basN = 0

let count = []

while(basN<bas.length){
	product = bas[basN].split('/')
	let color = product[1]
	let cost = product[2]
	let name = product[0]
	count[basN] = 1
	list.innerHTML += `<div class="list__punkt">
						<div class="list__item">
						<img src="img/items/${color}.webp" alt="" class="list__item__img">
						<div class="list__item__text">${name}</div>
					</div>
					<div class="count no-focus">
						<div class="minus" id = '${basN+20}'>-</div>
						<div class="counter">1</div>
						<div class="plus" id = '${basN}'>+</div>
						<div class="list__item__text list__item__text_number cost">${cost}р</div>
					</div>
					</div>`
	basN++

}



plus[0].onclick = function(){
	if (count[0]<5){
	count[0]++}
	let n = 0
	refresh(n)
}

if (bas.length > 1){
	plus[1].onclick = function(){
	if (count[1]<5){
	count[1]++}
	let n = 1
	refresh(n)}
}
if (bas.length > 2){
	plus[2].onclick = function(){
	if (count[2]<5){
	count[2]++}
	let n = 2
	refresh(n)}
}

if (bas.length > 3){
	plus[3].onclick = function(){
	if (count[3]<5){
	count[3]++}
	let n = 3
	refresh(n)}
}

if (bas.length > 4){
	plus[4].onclick = function(){
	if (count[4]<5){
	count[4]++}
	let n = 4
	refresh(n)}
}

if (bas.length > 5){
	plus[5].onclick = function(){
	if (count[5]<5){
	count[5]++}
	let n = 5
	refresh(n)}
}

if (bas.length > 6){
	plus[6].onclick = function(){
	if (count[6]<5){
	count[6]++}
	let n = 6
	refresh(n)}
}

if (bas.length > 7){
	plus[7].onclick = function(){
	if (count[7]<5){
	count[7]++}
	let n = 7
	refresh(n)}
}

if (bas.length > 8){
	plus[8].onclick = function(){
	if (count[8]<5){
	count[8]++}
	let n = 8
	refresh(n)}
}

if (bas.length > 9){
	plus[9].onclick = function(){
	if (count[9]<5){
	count[9]++}
	let n = 9
	refresh(n)}
}




//

minus[0].onclick = function(){
	if (count[0]!=0){
	count[0]--}
	let n = 0
	refresh(n)
}

if (bas.length > 1){
	minus[1].onclick = function(){
	if (count[1]!=0){
	count[1]--}
	let n = 1
	refresh(n)}
}
if (bas.length > 2){
	minus[2].onclick = function(){
	if (count[2]!=0){
	count[2]--}
	let n = 2
	refresh(n)}
}

if (bas.length > 3){
	minus[3].onclick = function(){
	if (count[3]!=0){
	count[3]--}
	let n = 3
	refresh(n)}
}

if (bas.length > 4){
	minus[4].onclick = function(){
	if (count[4]!=0){
	count[4]--}
	let n = 4
	refresh(n)}
}

if (bas.length > 5){
	minus[5].onclick = function(){
	if (count[5]!=0){
	count[5]--}
	let n = 5
	refresh(n)}
}

if (bas.length > 6){
	minus[6].onclick = function(){
	if (count[6]!=0){
	count[6]--}
	let n = 6
	refresh(n)}
}

if (bas.length > 7){
	minus[7].onclick = function(){
	if (count[7]!=0){
	count[7]--}
	let n = 7
	refresh(n)}
}

if (bas.length > 8){
	minus[8].onclick = function(){
	if (count[8]!=0){
	count[8]--}
	let n = 8
	refresh(n)}
}

if (bas.length > 9){
	minus[9].onclick = function(){
	if (count[9]!=0){
	count[9]--}
	let n = 9
	refresh(n)}
}

let itog = 0

refresh(0)

function refresh(n){
	let product = bas[n].split('/')
	let cost = product[2]
	document.getElementsByClassName('counter')[n].innerHTML = count[n]
	document.getElementsByClassName('cost')[n].innerHTML = `${count[n]*cost}р`
	let nn = 0
	itog = 0

	while (nn<bas.length){
		let producti = bas[nn].split('/')
		let costi = producti[2]
		itog += count[nn]*costi
		nn++
	}
	itog = (itog+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
	document.getElementsByClassName('costing')[0].innerHTML = `${itog}`
}

document.getElementsByClassName('adress_input')[0].onfocus = function(){
	let adres = document.getElementsByClassName('adress_input')[0].value
	if (adres == '' | adres == undefined | adres == 'г. Нижний Новгород, '){
		document.getElementsByClassName('adress_input')[0].value = 'г. Нижний Новгород, '
	}
}


button.onclick = function(){
	let tel = document.getElementsByClassName('tel_input')[0]
	tel = tel.value
	tel = tel.split('')
	tel = tel[0]
	let adres = document.getElementsByClassName('adress_input')[0].value
	let check =  document.getElementsByClassName('check')[0]
	if (tel == '' | tel == undefined){
		alert('Форма не до конца заполнена')
	}
	else if(tel != 8){
		alert('Номер телефона должен начинаться с восьми')
	}
	else if (adres == '' | adres == undefined | adres == 'г. Нижний Новгород, '){
		alert('Форма не до конца заполнена')
	}
	else if (check.checked != true){
		alert('Примите соглашение на обработку перс. данных')
	}
	else{
		let tel = document.getElementsByClassName('tel_input')[0].value
		let bN = 0 
		let str = ''
		while (bN<bas.length){
			basss = bas[bN].split('/')
			let colorr = basss[1]
			str += `${basss[0]} x${count[bN]} (id и цвет: ${colorr}),  `
			bN++
		}
		string = `Адрес: ${adres}  ;   Номер телефона: ${tel}  ;  Заказ: ${str}`
		document.body.style.overflow = 'hidden'
		document.getElementsByClassName('zak')[0].style.display = 'flex'
		localStorage.clear()
		let win = window.open([`https://api.telegram.org/bot5468188023:AAGLtH87xwdcZO7bCa7WuKbRdJ5OsX6kRP4/sendMessage?chat_id=-1001617821095&parse_mode=html&text=${string}`])
		setTimeout(function(){win.close()}, 500)
		setTimeout(
		
			function(){
				window.location.href = 'index.html'


			}


			, 4000)
	}
}