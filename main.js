/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

 
// const container = document.querySelector('#elementsContainer')
// const newHeader = document.createElement('h1')
// newHeader.innerText = 'New text'
// container.append(newHeader)
// const mainHeader = document.querySelector('header')
// const headerCopy = mainHeader.cloneNode(true)
// container.append(headerCopy)

// // const htmlEx = '<h2> Another text</h2>'
// // container.insertAdjacentHTML('beforeend',htmlEx)


// const title = 'Text page'
// const htmEx = `<h2>${title}</h2>`
// container.insertAdjacentHTML('beforeend',htmEx)



// const prom1 = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// prom1
// .then(a =>  a.json())
// .then(a => console.log(a))

const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
async function money(){
    try{
        const prom1 = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        const ans = await prom1.json()
        usd.innerText = ans.Valute.USD.Value
        eur.innerText = ans.Valute.EUR.Value
        console.log('ГГГГГ')
        console.log('Да здравствует Git')
        console.log('Другая ветка')
        // console.log(ans)
    }
    catch(e)
    {
        console.log(e)
    }
}
money()