let search = document.getElementsByClassName('search')[0]
let mails = document.getElementsByClassName('mails')[0]
string = ''
let work = false
let time = document.getElementById('time')
let mainBlock = document.getElementsByClassName('main-block')[0]
if(localStorage.getItem('scroll') == undefined){
    localStorage.setItem('scroll', true)
}
let now = new Date()
time.innerHTML = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`
setInterval(function(){
    now = new Date()
    time.innerHTML = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`
}, 1000)
if(localStorage.getItem('allf') == undefined){
    localStorage.setItem('allf', '')
}
let allfunctions = localStorage.getItem('allf')
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
    if(event.keyCode == 74 & search.value.toLowerCase() == 'порно'){
        search.value = ''
    }
    if(event.keyCode == 219 & search == document.activeElement & search.value.split('')[search.value.split('').length-1]!='х' & search.value.split('')[search.value.split('').length-1]!=']' & search.value.split('')[search.value.split('').length-1]!='{' & search.value.split('')[search.value.split('').length-1]!='Х'){
        search.value +=']'
    }
    if(event.keyCode == 13 & (search.value.toLowerCase() == 'пошел нахуй' || search.value.toLowerCase() == 'иди нахуй' || search.value.toLowerCase() == 'иди нахуй!' || search.value.toLowerCase() == 'пошла нахуй!' || search.value.toLowerCase() == 'пошел нахуй!' || search.value.toLowerCase() == 'пошла нахуй')){
        user('Я гей')
        search.value = ''
    }
    if (event.keyCode == 13 & search == document.activeElement & search.value!='' & (search.value.toLowerCase() != 'пошел нахуй' & search.value.toLowerCase() != 'иди нахуй' & search.value.toLowerCase() != 'иди на хуй' & search.value.toLowerCase() != 'пошла нахуй' & search.value.toLowerCase() != 'пошла нахуй!' & search.value.toLowerCase() != 'иди нахуй!'& search.value.toLowerCase() != 'пошел нахуй!')){
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
    }, 1800000)
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
    localStorage.setItem('allf', allfunctions)
    clip(s)
    web('Copied')
}

if(text.split('_')[0] == 'background'){
    mainBlock.style.background = `url(${text.split('_')[1]})`
    mainBlock.style.backgroundSize = `100% 100%`
    mainBlock.style.backgroundRepeat = `no-repeat`
    if(text.split('_')[1]!='' & text.split('').includes('_') == true){
    web('Желательно использовать светлый фон')}
}
if(text == ')'){web('<3')}


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
            element(`<img src = 'img/idea.gif'>`)
            setTimeout(function(){web('А то)')}, 1000)
        }
        if(text == 'sure'){web('хехе)')}
        if(text == 'яустал'){
                    let n = random(0, 3)
        
                    if(n == 0){web('Так отдохни!!')}
        if(n == 1){web('А ну, живо отдыхать')}
        if(n == 2){web('Не перенапрягайся')}
        
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
                if(text == 'java'){web('Мое любимое слово!')}
                if(text == 'умничка'){web('Ну лааадно тебе)')}
                if(text == 'молодец'){web('Смущаешь)')}
                if(text == 'ладнодавай'){web('Давай)')}
                if(text == 'дозавтра'){web('До завтра)')}
                if(text == 'моято'){web('хехее)')}
                if(text == 'хочуесть'){web('Так сходиии')}
                if(text == 'яхочуесть'){web('Так сходии, поешь')}
                if(text == 'умница'){web('Я такааая)')}
                if(text == 'спасибо'){web('обращайся))')}
                if(text == 'ok'){web('sure)')}
                if(text == 'letsgo'){web('За работу!')}
                if(text == 'сука'){web('А ну не матерись!')}
                if(text == 'nothing'){web('((')}
if(text == 'ничего'){web('((')}
if(text == 'tea'){web('Чай это язык на котором я написана')}
if(text == 'але'){web('да?')}

                 
                if(text == 'relax'){  
                    wait('Как скажешь', 1)  
                    wait('Выбери что-нибудь', 2)  
                    setTimeout(function(){element(`<a href="https://cdn.semyana.website/17/10/25/248428.mp4" target="_ blank" >Сестра брату</a>`)}, 3000) 
                    setTimeout(function(){element(`<a href="https://embeds.ah-me.com/embed/911355" target="_ blank" >Доча с папой</a>`)}, 3000)
                    setTimeout(function(){element(`<a href="https://yastatic.net/video-player/0x34e08fd964a/pages-common/iframe-default/iframe-default.html#html=%3Ciframe%20src%3D%22https%3A%2F%2Fnmcorp.video%2Fplayer%2F-159745528_456239903%3Fm%3Db46833af5fef99c4052d3625a98c0ff0%22%20frameborder%3D%220%22%20scrolling%3D%22no%22%20allowfullscreen%3D%221%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20accelerometer%3B%20gyroscope%3B%20picture-in-picture%22%20aria-label%3D%22Video%22%3E%3C%2Fiframe%3E&hidden=externalPlayback&counters=%7B%22reqid%22%3A%221656753119971787-14334831740810629738-vla1-5786-vla-l7-balancer-8080-BAL-3202%22%2C%22duration%22%3A2808%2C%22live%22%3Afalse%2C%22videoUrl%22%3A%22http%3A%2F%2Fnoodlemagazine.com%2Fwatch%2F-159745528_456239903%22%2C%22heartbeats%22%3A%7B%22singlePath%22%3A%22heartbeat.single.fserp%22%2C%22noRepeat%22%3Atrue%7D%2C%22table%22%3A%22video_tech%22%7D" target="_ blank" >Теща</a>`)}, 3000) 
                    setTimeout(function(){element(`<a href="https://yastatic.net/video-player/0x34e08fd964a/pages-common/iframe-default/iframe-default.html#html=%3Ciframe%20src%3D%22%2F%2Fwww.ebalka.video%2Fembed%2F86875%22%20frameborder%3D%220%22%20scrolling%3D%22no%22%20allowfullscreen%3D%221%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20accelerometer%3B%20gyroscope%3B%20picture-in-picture%22%20aria-label%3D%22Video%22%3E%3C%2Fiframe%3E&hidden=externalPlayback&counters=%7B%22reqid%22%3A%221656753320483676-9071948606988612783-vla1-5786-vla-l7-balancer-8080-BAL-736%22%2C%22duration%22%3A672%2C%22live%22%3Afalse%2C%22videoUrl%22%3A%22http%3A%2F%2Febalko.net%2Fvideos%2F86875%2Fsestra-podlechila-brata-rotikom-i-kiskoy%2F%22%2C%22heartbeats%22%3A%7B%22singlePath%22%3A%22heartbeat.single.fserp%22%2C%22noRepeat%22%3Atrue%7D%2C%22table%22%3A%22video_tech%22%7D" target="_ blank" >Сестра (new)</a>`)}, 3000)    
                }            
//


//



}, 0)
    mails.scrollTop = mails.scrollHeight
}