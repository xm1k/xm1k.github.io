let search = document.getElementsByClassName('search')[0]
let mails = document.getElementsByClassName('mails')[0]
string = ''
let work = false
let scrl = true
let allfunctions = ''
mails.style.overflow = 'auto'
mails.style.justifyContent = 'flex-start'
setTimeout(function(){mails.scrollTop = mails.scrollHeight}, 100)
if (localStorage.getItem('string')!=null){
string = localStorage.getItem('string')}
if (string == ''){
    string = `<div class = 'left'>Привет, я твоя верная помощница webbby)</div>`
    mails.innerHTML = string
    localStorage.setItem('string', string)
}
async function clip(t) {
    await navigator.clipboard.writeText(t)
  }
mails.innerHTML = string
document.onkeyup = function(event){
    if(event.keyCode == 219 & search == document.activeElement & search.value.split('')[search.value.split('').length-1]!='х' & search.value.split('')[search.value.split('').length-1]!=']' & search.value.split('')[search.value.split('').length-1]!='{' & search.value.split('')[search.value.split('').length-1]!='Х'){
        search.value +=']'
    }
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
    if (event.keyCode == 220 & search == document.activeElement & search.value!=''){
        search.value = ''
    }
}
function webbby(){
    setInterval(function(){
        let r = random(1,4)
        if(r==1){
            web('Ты уже долго работаешь, пора бы отдохнуть)')
        }
        if(r==2){
            web('Пить много воды полезно, лучше работает мозг')
        }
        if(r==3){
            web('Света наверное скучает...')

        }
    }, 3600000)
    setTimeout(function(){
        element(`<img src='https://cdn.dribbble.com/users/1686091/screenshots/7917582/media/d473833cef4b543a6111ebf651408582.gif' class = 'no-focus'>`)
    }, 1000)
}
function wait(t,n = 1){
    setTimeout(function(){
        web(t)
    }, n*1000)
}
function web(t){
    string+=`<div class="left">
    ${t}
    </div>`
    localStorage.setItem('string', string)
    mails.innerHTML = string
    mails.scrollTop = mails.scrollHeight
    let audio = new Audio()
    audio.src = './sounds/sound.mp3'
    audio.autoplay = true
} 
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
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
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
        await navigator.clipboard.writeText(t)})()
        web(t = 'Copied')
}
if(text.split(' - ') != text){
    let tex = text.split(' - ')[1]
    let ss = text.split(' - ')[0].toLowerCase()
    let sr = ''
    ss.split('').forEach(function(item, index, array){
        if(item != ' '){
            sr+=item
        }
    })
    let s = `if(text == '${sr}'){web('${tex}')}`
    if (tex.split('')[0] == '['){
        tex = tex.split('[')[1].split(']')[0].split('.')
        let te = ''
        tex.forEach(function(item, index, array){
            te+=`if(n == ${index}){web('${item}')}\n`
        })
        let ss = text.split(' - ')[0].toLowerCase()
        let sr = ''
        ss.split('').forEach(function(item, index, array){
            if(item != ' '){
                sr+=item
            }
        })
        s = `if(text == '${sr}'){
            let n = random(0, ${tex.length})\n
            ${te}
        }`
    }
    allfunctions+=`${s}\n`
    clip(s)
    web('Copied')
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
            localStorage.setItem('string', '')
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
        wait('Тебе спасибо', 1)
    }
    if(text.split('')[0] == 't' & text.split('')[1] == 'o'){
        let m = 1000
        if(text.split('to')[1]!=''){
            m=text.split('to')[1]
        }
        web(t = `setTimeout(function(){}, ${m})`)
        clip(t)
        web('Copied')
    }
    if(text.split('')[0] == 'i' & text.split('')[1] == 'n'){
        let m = 1000
        if(text.split('in')[1]!=''){
            m=text.split('in')[1]
        }
        web(t = `setInterval(function(){}, ${m})`)
        clip(t)
        web('Copied')
    }
    if (text == 'webbby' & work == false){
        work = true
        webbby()
        let r = random(1,4)
        if(r == 3){
            web('Привет! Чем займемся сегодня?')
        }
        if(r == 2){
            web('Чувствую что сегодняшний день будет тяжелым')
        }
        if(r == 1){
            web('И снова в работу!)')
        }
    }
    if(text == 'scroll' || text == 'scrl'){
        if(scrl == true){
            scrl = false
            mails.style.overflow = 'clip'
            mails.style.justifyContent = 'flex-end'
            web('Скролл остановлен')
        }
        else if(scrl == false){
            mails.style.overflow = 'auto'
            mails.style.justifyContent = 'flex-start'
            mails.scrollTop = mails.scrollHeight
            scrl = true
            web('Скролл возобновлен')
        }
    }
    if(text == 'all'){
        web('Функции скопированы')
        clip(allfunctions)
    }
    if(text == 'милашка' | text == 'cute'){element(`<img src = 'https://i.yapx.cc/RK5HH.gif' class = 'no-focus' style = 'margin-bottom: 20px'>`)
    wait('Ты чего...')
}   


//


//



}, 0)
    mails.scrollTop = mails.scrollHeight
}