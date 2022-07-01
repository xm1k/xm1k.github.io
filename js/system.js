let search = document.getElementsByClassName('search')[0]
let mails = document.getElementsByClassName('mails')[0]
string = ''
if (localStorage.getItem('string')!=null){
string = localStorage.getItem('string')}
if (string == ''){
    string = `<div class = 'left'>Привет, я твоя верная помощница webbby)</div>`
    mails.innerHTML = string
    localStorage.setItem('string', string)
}
mails.innerHTML = string
document.onkeyup = function(event){
    if (event.keyCode == 13 & search == document.activeElement & search.value!=''){
        let text = search.value
        string+=`<div class="right">
       ${search.value}
    </div>`
        localStorage.setItem('string', string)
        search.value = ''
        mails.innerHTML = string
        sms(text)
    }
}
function web(t){
    setTimeout(function(){
    string+=`<div class="left">
    ${t}
    </div>`
    localStorage.setItem('string', string)
    mails.innerHTML = string
    mails.scrollTop = mails.scrollHeight
    let audio = new Audio()
    audio.src = './sounds/sound.mp3'
    audio.autoplay = true
    },300)}
function element(t){
        setTimeout(function(){
        string+=t
        localStorage.setItem('string', string)
        mails.innerHTML = string
        mails.scrollTop = mails.scrollHeight
        let audio = new Audio()
        audio.src = './sounds/sound.mp3'
        audio.autoplay = true
    },300)}
function user(t){
    setTimeout(function(){
    string+=`<div class="right">
    ${t}
    </div>`
    localStorage.setItem('string', string)
    mails.innerHTML = string
    mails.scrollTop = mails.scrollHeight
    }, 300)}
function sms(text){
    
    if (text.split('')[0] == 'f' & text.split('')[1] == '/'){
        t = text.split('/')[1]
        if (/^\d+$/.test(t) == true){
            t = `for (let i = 0; i < ${t}; i++){}`
            web(t)
        }
        else if(/^[a-zA-Z0-9]+$/.test(t) == true){
            t = `for (let i = 0; i < ${t}.length; i++){}`
            web(t)
        }
        else if(/^[a-zA-Z0-9]+$/.test(text.split('//')[1]) == true){
            t = text.split('//')[1]
            t = `${t}.forEach(function(item, index, array){})`
            web(t)
        }
        else if(/^[a-zA-Z0-9]+$/.test(text.split('///')[1]) == true){
            t = text.split('///')[1]
            t = `${t}.forEach(function(it, ind, arr){})`
            web(t)
        }
        (async () => {
        await navigator.clipboard.writeText(t)
    })()
        web(t = 'Copied')
}


    // Без символов



    list = text.toLowerCase().split('')
    let str = ''
    list.forEach(function(item,index,array){
        if(/[a-z0-9а-я]/.test(array[index]) == true){
            str+=item
        }
    })
    text = str
    setTimeout(function(){
    if (text == 'привет'){
        web(t = 'Ну привет)')
    }
    if(text == 'clear' || text == 'clr'){
        web(t = 'Секунду...')
        setTimeout(function(){
            localStorage.clear()
            string = ''
            mails.innerHTML = ''
        }, 1000)
    }
    if (text == 'v'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://vk.com/im'])
        }, 100)
    }
    if (text == 'fltrs'){
        web(t = '/[a-z0-9а-я]/')
        web(t = 'Только буквы')
        web(t = '/^\d+$/')
        web(t = 'Только цифры')
    }
    if(text == 'word'){
        web(t = '/[a-z0-9а-я]/')
    }
    if(text == 'num'){
        web(t = '/^\d+$/')
    }
    if (text == 't'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://web.telegram.org/k/'])
        }, 100)
    }
    if(text == 'thx'){
        element(t = `<img src='https://kartinkin.net/uploads/posts/2021-07/1625751450_9-kartinkin-com-p-falshivaya-ulibka-art-art-krasivo-9.jpg' class = 'left'>`)
    }
}, 0)
    mails.scrollTop = mails.scrollHeight
}