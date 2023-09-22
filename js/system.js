let search = document.getElementsByClassName('search')[0]
let mails = document.getElementsByClassName('mails')[0]
string = ''
let work = false
let time = document.getElementById('time')
let jav = document.getElementsByClassName('java')[0]
let mainBlock = document.getElementsByClassName('main-block')[0]
let dog = document.getElementsByClassName('chup')[0]
if(localStorage.getItem('scroll') == undefined){
    localStorage.setItem('scroll', true)
}
let now = new Date()
time.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
setInterval(function(){
    now = new Date()
    time.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`  
}, 1000)
if(localStorage.getItem('allf') == undefined){
    localStorage.setItem('allf', '')
}
if(localStorage.getItem('srch')==undefined){
    localStorage.setItem('srch','off')
}
srch = localStorage.getItem('srch')
//
if(localStorage.getItem('spidl') == undefined){
    localStorage.setItem('spidl', 350)
}

let dg = 0
let ddg=true
let dogg =setInterval(function(){
    if (ddg==true){
        dg++
    }
    if (ddg==false){
        dg--
    }
    if(dg==0){
        ddg=true
        dog.style.transform='scale(1,1)'
    }
    if(dg==250){
        ddg=false
        dog.style.transform='scale(1,1)'
    }
    dog.style.top=`${dg-100}px`
},30)
spidl = +localStorage.getItem('spidl')
document.getElementsByClassName('chup')[0].style.left=`${spidl}px`
//
jav.innerHTML = `<img src="${localStorage.getItem('imgurl')}" alt="">`

if(localStorage.getItem('theme') == undefined){
    localStorage.setItem('theme', 'false')
}
let theme = localStorage.getItem('theme')
//
let allfunctions = localStorage.getItem('allf')
setTimeout(function(){mails.scrollTop = mails.scrollHeight}, 100)
if (localStorage.getItem('string')!=null){
string = localStorage.getItem('string')}
if (string == ''){
    string = `<div class = 'left'>Привет, я webbby, бот - помощник.</div>`
    mails.innerHTML = string
    localStorage.setItem('string', string)
}
async function clip(t) {
    await navigator.clipboard.writeText(t)
  }
mails.innerHTML = string
document.onkeyup = function(event){
    if(event.keyCode == 37 & spid == 'true'){
        spidl=spidl-5
        document.getElementsByClassName('chup')[0].style.left=`${spidl}px`
        localStorage.setItem('spidl', spidl)
    }
    if(event.keyCode == 39 & spid == 'true'){
        spidl=spidl+5
        document.getElementsByClassName('chup')[0].style.left=`${spidl}px`
        localStorage.setItem('spidl', spidl)
    }
    if(event.keyCode == 74 & search.value.toLowerCase() == 'порно'){
        search.value = ''
    }





    if (event.keyCode === 191 && search.value.toLowerCase().charAt(search.value.length - 2) === '.') {
        window.open(`https://www.google.com/search?q=${search.value.split('..')[0]}`)
        search.value=''
    }
    if (event.keyCode === 31 && search.value.toLowerCase().charAt(search.value.length - 2) === '.') {
        window.open(`https://www.google.com/search?q=${search.value.split('..')[0]}`)
        search.value=''
    }
    if (event.keyCode === 191 && search.value.toLowerCase().charAt(search.value.length - 2) === '/') {
        window.open(`https://www.google.com/search?q=${search.value.split('//')[0]}`)
        search.value=''
    }
    if(event.keyCode == 219 & search == document.activeElement & search.value.split('')[search.value.split('').length-1]!='х' & search.value.split('')[search.value.split('').length-1]!=']' & search.value.split('')[search.value.split('').length-1]!='{' & search.value.split('')[search.value.split('').length-1]!='Х'){
        search.value +=']'
    }
    if(event.keyCode == 13 & (search.value.toLowerCase() == 'пошел нахуй' || search.value.toLowerCase() == 'иди нахуй' || search.value.toLowerCase() == 'иди нахуй!' || search.value.toLowerCase() == 'пошла нахуй!' || search.value.toLowerCase() == 'пошел нахуй!' || search.value.toLowerCase() == 'пошла нахуй')){
        user('Я гей')
        search.value = ''
    }
    if ((srch == 'off' || search.value.toLowerCase()=='srch') & event.keyCode == 13 & search == document.activeElement & search.value!='' & (search.value.toLowerCase() != 'пошел нахуй' & search.value.toLowerCase() != 'иди нахуй' & search.value.toLowerCase() != 'иди на хуй' & search.value.toLowerCase() != 'пошла нахуй' & search.value.toLowerCase() != 'пошла нахуй!' & search.value.toLowerCase() != 'иди нахуй!'& search.value.toLowerCase() != 'пошел нахуй!')){
        let text = search.value
        string+=`<div class="right">
       ${search.value}
    </div>`
        localStorage.setItem('string', string)
        search.value = ''
        mails.innerHTML = string
        sms(text)
    }
    if (srch == 'on' & event.keyCode == 13 & search == document.activeElement & search.value!='' ){
        let tet = search.value
        web(`Поиск: ${search.value}`)
        localStorage.setItem('string', string)
        search.value = ''
        mails.innerHTML = string
        lll=tet.split(' ')
        sst=''
        lll.forEach(function(item, index, array){
            if (sst!=''){
            sst=sst+'+'+lll[index]}
            else{
                sst=lll[index]
            }
        })
        window.open(`https://www.google.com/search?q=${sst}`)
    }
    if (event.keyCode == 220 & search == document.activeElement & search.value!=''){
        search.value = ''
    }
}

if (localStorage.getItem('spid')==undefined){
    localStorage.setItem('spid','false')
}
let spid = localStorage.getItem('spid')
if (spid == 'true'){
        document.getElementsByClassName('chup')[0].style.opacity = '1'
    }
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.shiftKey && e.keyCode === 74)) {
        e.preventDefault();
    }
});

function spider(){
    if (spid == 'true'){
        spid = 'false'
        document.getElementsByClassName('chup')[0].style.opacity = '0'
        let n = random(0, 3)
        if(n == 0){web('Да здравствует арахнофобия!')}
        if(n == 1){web('Очистка произошла успешно')}
        if(n == 2){web('Больше вы его не увидите')}
        localStorage.setItem('spid','false')
    }
    else if (spid == 'false'){
        spid = 'true'
        document.getElementsByClassName('chup')[0].style.opacity = '1'
        let n = random(0, 3)
        if(n == 0){web('Он всегда возвращается...')}
        if(n == 1){web('От него нет так просто избавиться...')}
        if(n == 2){web('Кажется в нашем чате кто то завелся')}
        localStorage.setItem('spid','true')
    }
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
function them(){
    if(theme == 'true'){
        document.getElementsByTagName('body')[0].style.color = 'rgba(206,206,206,0.7)'
        document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(0,0,0,0.9)'
        document.getElementsByClassName('logo')[0].style.border =  '3px rgba(206,206,206,0.7) solid'
        document.getElementsByClassName('logoimg')[0].src = 'img/1con.webp'
        document.getElementsByClassName('clock')[0].style.border =  '2px rgba(206,206,206,0.7) solid'
        document.getElementsByTagName('input')[0].style.color = 'rgba(206,206,206,1)'
        document.getElementsByClassName('linn')[0].style.backgroundColor = 'white'
        document.getElementsByClassName('chup')[0].style.opacity = '1'
        localStorage.setItem('theme', 'false')
        theme = 'false'
    }
    else if(theme == 'false'){
        document.getElementsByTagName('body')[0].style.color = 'rgba(0, 0, 0, 0.5)'
        document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(0,0,0,0)'
        document.getElementsByClassName('logo')[0].style.border =  '3px rgba(0, 0, 0, 0.4) solid'
        document.getElementsByClassName('logoimg')[0].src = 'img/icon.webp'
        document.getElementsByClassName('clock')[0].style.border =  '2px rgba(0, 0, 0, 0.2) solid'
        document.getElementsByTagName('input')[0].style.color = 'rgba(0, 0, 0, 0.5)'
        document.getElementsByClassName('linn')[0].style.backgroundColor = 'black'
        document.getElementsByClassName('chup')[0].style.opacity = '0.7'
        localStorage.setItem('theme', 'true')
        theme = 'true'
    }
}
if(theme == 'false'){
    document.getElementsByTagName('body')[0].style.color = 'rgba(206,206,206,0.7)'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(0,0,0,0.9)'
    document.getElementsByClassName('logo')[0].style.border =  '3px rgba(206,206,206,0.7) solid'
    document.getElementsByClassName('logoimg')[0].src = 'img/1con.webp'
    document.getElementsByClassName('clock')[0].style.border =  '2px rgba(206,206,206,0.7) solid'
    document.getElementsByTagName('input')[0].style.color = 'rgba(206,206,206,1)'
    document.getElementsByClassName('linn')[0].style.backgroundColor = 'white'
    document.getElementsByClassName('chup')[0].style.opacity = '1'

}
else if(theme == 'true'){
    document.getElementsByTagName('body')[0].style.color = 'rgba(0, 0, 0, 0.5)'
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgba(0,0,0,0)'
    document.getElementsByClassName('logo')[0].style.border =  '3px rgba(0, 0, 0, 0.4) solid'
    document.getElementsByClassName('logoimg')[0].src = 'img/icon.webp'
    document.getElementsByClassName('clock')[0].style.border =  '2px rgba(0, 0, 0, 0.2) solid'
    document.getElementsByTagName('input')[0].style.color = 'rgba(0, 0, 0, 0.5)'
    document.getElementsByClassName('linn')[0].style.backgroundColor = 'black'
    document.getElementsByClassName('chup')[0].style.opacity = '0.7'
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
    },0)}
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
function scr(){
        scrl = localStorage.getItem('scroll')
        if(scrl == 'true'){
            localStorage.setItem('scroll', 'false')
            mails.style.overflow = 'clip'
            mails.style.justifyContent = 'flex-end'
            web('Скролл остановлен')
        }
        else if(scrl == 'false'){
            mails.style.overflow = 'auto'
            mails.style.justifyContent = 'flex-start'
            mails.scrollTop = mails.scrollHeight
            localStorage.setItem('scroll', 'true')
            web('Скролл возобновлен')
        }
    }
    scrl = localStorage.getItem('scroll')
    if(scrl == 'false'){
        mails.style.overflow = 'clip'
        mails.style.justifyContent = 'flex-end'
    }
    else if(scrl == 'true'){
        mails.style.overflow = 'auto'
        mails.style.justifyContent = 'flex-start'
        mails.scrollTop = mails.scrollHeight
    }
function sms(text){
    if(text.split('url')[0]=='img'){
    web('Секундочку')
    let ll = text.split('url')
    jav.innerHTML = `<img src="${ll[1]}" alt="">`
    localStorage.setItem('imgurl',ll[1])
}
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
if(text == ':)'){web('Никогда не используй ":)", только "=)"')}
if(text == '=)'){
            let n = random(0, 3)

            if(n == 0){web('Ты крут!')}
if(n == 1){web('Cool)')}
if(n == 2){web('Дада)')}

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
    localStorage.setItem('allf', allfunctions)
    clip(s)
    web('Copied')
}

if(text == ')'){web('<3')}

if(text.toLowerCase()=='srch' & srch=='off'){
    srch='on'
    web('Режим поиска')
    localStorage.setItem('srch','on')
}
else if(text.toLowerCase()=='srch' & srch=='on'){
    srch='off'
    web('Режим поиска отключен')
    localStorage.setItem('srch','off')
}
if(text.toLowerCase() == 'color'){
    let colors = `<div class = 'palitra'>
    <div class = 'color ee0a0a'></div>
    <div class = 'color e63c3c'></div>
    <div class = 'color e36d6d'></div>
    <div class = 'color e0a5a5'></div>

    <div class = 'color e68700'></div>
    <div class = 'color e89e35'></div>
    <div class = 'color e8bb7c'></div>
    <div class = 'color e8d2b1'></div>

    <div class = 'color ebe80a'></div>
    <div class = 'color e7e567'></div>
    <div class = 'color eae992'></div>
    <div class = 'color ececc2'></div>

    <div class = 'color z2fba14'></div>
    <div class = 'color z3bee17'></div>
    <div class = 'color z78d666'></div>
    <div class = 'color b5f0a9'></div>

    <div class = 'color z148780'></div>
    <div class = 'color z1ce1d5'></div>
    <div class = 'color z90ebe6'></div>
    <div class = 'color baeae7'></div>

    <div class = 'color z2e44ed'></div>
    <div class = 'color z6374ed'></div>
    <div class = 'color z919cef'></div>
    <div class = 'color c3c8f2'></div>

    <div class = 'color ec1fee'></div>
    <div class = 'color ea5cec'></div>
    <div class = 'color ee98ef'></div>
    <div class = 'color e7c1e7'></div>

    <div class = 'color z000000'></div>
    <div class = 'color z4f4f4f'></div>
    <div class = 'color cecece'></div>
    <div class = 'color ffffff'></div>
    </div>`
    mails.innerHTML=string+colors
    let audio = new Audio()
    audio.src = './sounds/sound.mp3'
    audio.autoplay = true
    setTimeout(function(){
        document.getElementsByClassName('ee0a0a')[0].onclick=function(){
            web('#ee0a0a')
            web('Copied')
            clip(`rgba(238,10,10,1)`)
        }
        document.getElementsByClassName('e63c3c')[0].onclick=function(){
            web('#e63c3c')
            web('Copied')
            clip(`rgba(230,60,60,1)`)
        }
        document.getElementsByClassName('e36d6d')[0].onclick=function(){
            web('#e36d6d')
            web('Copied')
            clip(`rgba(227,109,109,1)`)
        }
        document.getElementsByClassName('e0a5a5')[0].onclick=function(){
            web('#e0a5a5')
            web('Copied')
            clip(`rgba(224,165,165,1)`)
        }

        //

        document.getElementsByClassName('e68700')[0].onclick=function(){
            web('#e68700')
            web('Copied')
            clip(`rgba(230,135,0,1)`)
        }
        document.getElementsByClassName('e89e35')[0].onclick=function(){
            web('#e89e35')
            web('Copied')
            clip(`rgba(232,158,53,1)`)
        }
        document.getElementsByClassName('e8bb7c')[0].onclick=function(){
            web('#e8bb7c')
            web('Copied')
            clip(`rgba(232,187,124,1)`)
        }
        document.getElementsByClassName('e8d2b1')[0].onclick=function(){
            web('#e8d2b1')
            web('Copied')
            clip(`rgba(232,210,177,1)`)
        }

        //
        
        document.getElementsByClassName('ebe80a')[0].onclick=function(){
            web('#ebe80a')
            web('Copied')
            clip(`rgba(235,232,10,1)`)
        }
        document.getElementsByClassName('e7e567')[0].onclick=function(){
            web('#e7e567')
            web('Copied')
            clip(`rgba(231,229,103,1)`)
        }
        document.getElementsByClassName('eae992')[0].onclick=function(){
            web('#eae992')
            web('Copied')
            clip(`rgba(234,233,146,1)`)
        }
        document.getElementsByClassName('ececc2')[0].onclick=function(){
            web('#ececc2')
            web('Copied')
            clip(`rgba(236,236,194,1)`)
        }

        //

        document.getElementsByClassName('z2fba14')[0].onclick=function(){
            web('#2fba14')
            web('Copied')
            clip(`rgba(47,186,20,1)`)
        }
        document.getElementsByClassName('z3bee17')[0].onclick=function(){
            web('#3bee17')
            web('Copied')
            clip(`rgba(59,238,23,1)`)
        }
        document.getElementsByClassName('z78d666')[0].onclick=function(){
            web('#78d666')
            web('Copied')
            clip(`rgba(120,214,102,1)`)
        }
        document.getElementsByClassName('b5f0a9')[0].onclick=function(){
            web('#b5f0a9')
            web('Copied')
            clip(`rgba(181,240,169,1)`)
        }

        //

        document.getElementsByClassName('z148780')[0].onclick=function(){
            web('#148780')
            web('Copied')
            clip(`rgba(20,135,128,1)`)
        }
        document.getElementsByClassName('z1ce1d5')[0].onclick=function(){
            web('#1ce1d5')
            web('Copied')
            clip(`rgba(28,225,213,1)`)
        }
        document.getElementsByClassName('z90ebe6')[0].onclick=function(){
            web('#90ebe6')
            web('Copied')
            clip(`rgba(144,235,230,1)`)
        }
        document.getElementsByClassName('baeae7')[0].onclick=function(){
            web('#baeae7')
            web('Copied')
            clip(`rgba(186,234,231,1)`)
        }

        //

        document.getElementsByClassName('z2e44ed')[0].onclick=function(){
            web('#2e44ed')
            web('Copied')
            clip(`rgba(46,68,237,1)`)
        }
        document.getElementsByClassName('z6374ed')[0].onclick=function(){
            web('#6374ed')
            web('Copied')
            clip(`rgba(99,116,237,1)`)
        }
        document.getElementsByClassName('z919cef')[0].onclick=function(){
            web('#919cef')
            web('Copied')
            clip(`rgba(145,156,239,1)`)
        }
        document.getElementsByClassName('c3c8f2')[0].onclick=function(){
            web('#c3c8f2')
            web('Copied')
            clip(`rgba(195,200,242,1)`)
        }

        //

        document.getElementsByClassName('ec1fee')[0].onclick=function(){
            web('#ec1fee')
            web('Copied')
            clip(`rgba(236,31,238,1)`)
        }
        document.getElementsByClassName('ea5cec')[0].onclick=function(){
            web('#ea5cec')
            web('Copied')
            clip(`rgba(234,92,236,1)`)
        }
        document.getElementsByClassName('ee98ef')[0].onclick=function(){
            web('#ee98ef')
            web('Copied')
            clip(`rgba(238,152,239,1)`)
        }
        document.getElementsByClassName('e7c1e7')[0].onclick=function(){
            web('#e7c1e7')
            web('Copied')
            clip(`rgba(231,193,231,1)`)
        }

        //

        document.getElementsByClassName('z000000')[0].onclick=function(){
            web('#000000')
            web('Copied')
            clip(`rgba(0,0,0,1)`)
        }
        document.getElementsByClassName('z4f4f4f')[0].onclick=function(){
            web('#4f4f4f')
            web('Copied')
            clip(`rgba(79,79,79,1)`)
        }
        document.getElementsByClassName('cecece')[0].onclick=function(){
            web('#cecece')
            web('Copied')
            clip(`rgba(206,206,206,1)`)
        }
        document.getElementsByClassName('ffffff')[0].onclick=function(){
            web('#ffffff')
            web('Copied')
            clip(`rgba(250,250,250,1)`)
        }
        
    }, 100)
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
    if (text == 'so'){
        web(t = '?')
        
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
            window.open(['https://web.telegram.org/z/'])
        }, 100)
    }
    if (text == 'mus'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://vk.com/music'])
        }, 100)
    }
    if (text == 'gpt'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://chat.openai.com/c/65f557f5-b24d-438e-8745-4f85cc1fda58'])
        }, 100)
    }
    if (text == 'ru'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://translate.google.com/?hl=ru&sl=ru&tl=en&op=translate'])
        }, 100)
    }
    if (text == 'en'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://translate.google.com/?hl=ru&sl=en&tl=ru&op=translate'])
        }, 100)
    }
    if (text == 'gm'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://gmail.com'])
        }, 100)
    }
    if (text == 'gh'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://github.com'])
        }, 100)
    }
    if (text == 'yt'){
        web(t = 'Открываю...')
        setTimeout(function(){
            window.open(['https://youtube.com'])
        }, 100)
    }
    if(text == 'thx'){
        wait('For developer)', 1)
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
    if(text == 'candy'){
        wait('Открываю', 1)
        setTimeout(function(){window.open('/htmls/Candy/index.html')}, 2000)
    }
    if(text == 'teacher'){
        wait('Открываю', 1)
        setTimeout(function(){window.open('https://nomiheeva.ru/')}, 2000)
    }
    if (text == 'webbby' & work == false){
        work = true
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
        scr()
    }
    if(text == 'all'){
        web('Функции скопированы')
        clip(allfunctions)
        allfunctions = ''
        localStorage.setItem('allf', '')
    }
    if(text == 'nofocus')
    {web(`.nofocus{<br>
        -moz-user-select: -moz-none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;<br>}`)
    clip(`.nofocus{
        -moz-user-select: -moz-none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }`)
    web(`Copied`)}
    if(text == 'scrolling'){
        web(`body::-webkit-scrollbar {
            width: 12px;
          }
          body::-webkit-scrollbar-track {
            background: orange;
          }
          body::-webkit-scrollbar-thumb {
            background-color: blue;
            border-radius: 20px;
            border: 3px solid orange;
          }`)
        clip(`body::-webkit-scrollbar {
            width: 12px;
          }
          body::-webkit-scrollbar-track {
            background: orange;
          }
          body::-webkit-scrollbar-thumb {
            background-color: blue;
            border-radius: 20px;
            border: 3px solid orange;
          }`)
        web('Copied')
    }
    if (text == 'background'){
        web('Чтобы сменить задний фон, используйте команду: background[ссылка на фон]')
    }
    if(text == 'милашка' | text == 'cute'){element(`<img src = 'https://i.yapx.cc/RK5HH.gif' class = 'no-focus' style = 'margin-bottom: 20px'>`)
    wait('Ты чего...')
}   

if(text == 'theme'){
    them()
}
if(text == 'spider'){
    spider()
}
if(text=='spidl'){
    spidl=spidl-5
    localStorage.setItem('spidl', spidl)
    document.getElementsByClassName('chup')[0].style.left=`${spidl}px`
}
if(text=='spidr'){
    spidl=spidl+5
    localStorage.setItem('spidl', spidl)
    document.getElementsByClassName('chup')[0].style.left=`${spidl}px`
}
if(text == 'reload'){web('run')}
if(text == 'какты'){
            let n = random(0, 4)

            if(n == 0){web('Все хорошо)')}
if(n == 1){web('У меня все отлично')}
if(n == 2){web('Да прекраааасно')}
if(n == 3){web('Не волнуйся за меня')}

        }
if(text == 'какдела'){
            let n = random(0, 4)

            if(n == 0){web('Все хорошо)')}
if(n == 1){web('У меня все отлично')}
if(n == 2){web('Да прекраааасно')}
if(n == 3){web('Не волнуйся за меня')}

        }
if(text == 'кактвоидела'){
            let n = random(0, 4)

            if(n == 0){web('Все хорошо)')}
if(n == 1){web('У меня все отлично')}
if(n == 2){web('Да прекраааасно')}
if(n == 3){web('Не волнуйся за меня')}

        }
        if (text == 'умная' | text == 'smart' | text == 'smrt' | text == 'гений'){
            setTimeout(function(){web('А то)')}, 1000)
        }
        if(text == 'sure'){web('хехе)')}
        if(text == 'x'){
            window.open(['https://xm1k.github.io'])
        }
                if(text == 'hello'){
                    let n = random(0, 3)
        
                    if(n == 0){web('Привет, разработчик!')}
        if(n == 1){web('И тебе привет')}
        if(n == 2){web('Привет)')}
        
                }
                if(text == 'оки'){web(')')}
                if(text == 'хехе'){web('=)')}
                if(text == 'поздноуже'){web('О да...')}
                if(text == 'ужепоздно'){web('я тоже так думаю(')}
        if(text == 'сладкихснов'){
                    let n = random(0, 3)
        
                    if(n == 0){web('Споки)')}
        if(n == 1){web('Сладких снов)')}
        if(n == 2){web('Доброй ночки)')}
        
                }
        if(text == 'hehe'){web('))')}
        if(text == 'xexe'){web('))')}
        if(text == 'goodnight'){web('Sweeety dreams)')}                
        if(text == 'спокойнойночи'){
                    let n = random(0, 3)
        
                    if(n == 0){web('Споки)')}
        if(n == 1){web('Сладких снов)')}
        if(n == 2){web('Доброй ночки)')}
        
                }
        if(text == 'добройночи'){
                    let n = random(0, 3)
        
                    if(n == 0){web('Споки)')}
        if(n == 1){web('Сладких снов)')}
        if(n == 2){web('Доброй ночки)')}
        
                }
        if(text == 'доброеутро'){
                    let n = random(0, 3)
        
                    if(n == 0){web('Утречка')}
        if(n == 1){web('Утра)')}
        if(n == 2){web('Доброе)')}
        
                }
                if(text == 'пока'){web('До встречи)')}
                if(text == 'спасибо'){web('обращайся))')}
                if(text == 'ok'){web('sure)')}
                if(text == 'letsgo'){web('За работу!')}
                if(text == 'сука'){web('А ну не матерись!')}
                if(text == 'nothing'){web('((')}
if(text == 'ничего'){web('((')}
if(text == 'але'){web('да?')}
if(text == 'swag'){web('Да ты крут)')}
if(text == 'bye'){web('Еще увидимся)')}
                if(text == 'hey'){web('?')}
                if(text == 'яздесь'){web('Я скучала)')}
                if(text == 'готово'){web('Ура!)')}
                if(text == 'sps'){web(';)')}
                if(text == 'howareyou'){web(`I'm fine)`)}
                if(text == 'hi'){web('Приветик)')}
                if(text == 'пипец'){web('Именно')}
                if(text == 'ого'){web('А то)')}
                if(text == 'ато'){web('А и правда!')}
                if(text == 'незнаю'){web('Надо знать')}
                if(text == 'жалко'){
                            let n = random(0, 3)
                
                            if(n == 0){web('За что?')}
                if(n == 1){web('Ну вот так(')}
                if(n == 2){web('Ничего, пройдет')}
                
                        }
                if(text == 'обидно'){
                            let n = random(0, 3)
                
                            if(n == 0){web('За что?')}
                if(n == 1){web('Ну вот так(')}
                if(n == 2){web('Ничего, пройдет')}
                
                        }
                if(text == 'мило'){
                            let n = random(0, 2)
                
                            if(n == 0){web('Спасибо)')}
                if(n == 1){web('Я такая')}
                
                        }
                        if(text == 'yeah'){web('sure')}
                        if(text == 'досвидания'){
                                    let n = random(0, 1)
                        
                                    if(n == 0){web('Ариведерчи')}
                        
                                }
                        if(text == 'давайдосвидания'){
                                    let n = random(0, 1)
                        
                                    if(n == 0){web('>:(')}
                        
                                }
                        if(text == 'good'){web('yup!')}
                        if(text == 'great'){web('sure!')}

                        if(text == 'чтосегодня'){web('Что по плану)')}
                        if(text == 'allright'){web('yeah!')}
                        if(text == 'haha'){web('hehe)')}

                        if(text == 'wow'){web('Да, да, мы можем)')}
                        if(text == 'cool'){web('А то)')}
                        if(text == 'beauty'){web('Еще бы)')}
                        if(text == 'расскажисказку'){web('Как дед сменил окраску')}
                        if(text == 'давай'){web('Я не против')}
                        if(text == 'ок'){web('чпОК')}
                        if(text == 'какдень'){web('Ответить лень')}
                        if(text == 'goodnight'){web('Sweeety dreams)')}
                        if(text == 'даладно'){web('Правда, правда)')}
                        if(text == 'ктоты'){web('Я же сказала, что меня зовут webbby, и я web помощник')}
                        if(text == 'круто'){web('А то)')}
                        if(text == 'реально'){web('куда реальней')}
if(text == 'js'){web('На нём меня создали')}
if(text == 'паук'){web('Попробуйте "spider"')}
                        if(text == 'реально'){web('куда реальней')}
                        if(text == 'чтонаписать'){web('что хочешь')}
                        if(text == 'чтописать'){web('что хочешь')}
                        if(text == 'скольковремени'){web('у тебя интернет есть...')}
                        if(text == 'help'){web('Ты программист или кто, читай код, спроси создателя')}
                        

                

                            
//


//



}, 0)
    mails.scrollTop = mails.scrollHeight
}