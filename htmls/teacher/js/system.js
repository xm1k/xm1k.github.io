let tri = document.getElementsByClassName('tri')[0]
let show = true
let nav = document.getElementsByClassName('navigation')[0]
let eight = document.getElementsByClassName('eight')[0]
tri.onclick = function(){
	if(show == true){
	tri.style.rotate = '90deg'
	nav.style.right = '0px'
	setTimeout(function(){show = false}, 100)
	
}
	if(show == false){
	tri.style.rotate = '-90deg'
	nav.style.right = '-500px'
	setTimeout(function(){show = true}, 100)
}
}