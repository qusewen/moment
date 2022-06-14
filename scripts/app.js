

// поиск нужного места из документа

const nowTime = document.querySelector('#clock-of-data')
const dayOfWeek = document.querySelector('#data-of-day')
const gretingsUser = document.querySelector('#gretings-user')
const greetingsElement = document.querySelector('#time-of-date')
const body = document.querySelector('body')
const nextSlide = document.querySelector('.slider_next')
const prevSlide = document.querySelector('.slider_prev')

//здесь вытягиваю нужные мне значения из даты
let date = new Date()
const hours = date.getHours();
const day = date.getDay();
const month = date.getMonth();
const num = date.getDate()
// const time = date.toLocaleTimeString();

// console.log(time)


//нужные перменные 
let timeDate ='';
let dayWeek = '';
let monthTime = '';
let timeOfdate = '';
let bgnum;
let url = ''
//вызов функции

getDay()
getMonth()
getTimeOfDate()
showTime()
getRandomNum()
// функция которая возвращает нам случайное число

nextSlide.onclick = nextPhoto
prevSlide.onclick = prevPhoto
function nextPhoto(){
    getRandomNum()
 
}
function prevPhoto(){
    getRandomNum()
}




function getRandomNum(){
    bgnum = (Math.random() * (20 - 10) + 10).toFixed(0);
    url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeDate}/${bgnum}.jpg`
    console.log(url)
    body.style.backgroundImage = `url(${url})`
    console.log(body.style.backgroundImage) 
}






console.log(bgnum)
function showTime(){
    date = new Date()
    nowTime.innerHTML = date.toLocaleTimeString()  
    
    setTimeout(showTime, 1000);
}



//опеределение месяца
function getMonth(){
    if(month == 0){
        monthTime = 'Январь'
    }else if(month == 1){
        monthTime = 'Февраль'
    }
    if(month == 2){
        monthTime = 'Март'
    }
    if(month == 3){
        monthTime = 'Апрель'
    }
    if(month == 4){
        monthTime = 'May'
    }
    if(month == 5){
        monthTime = 'Июнь'
    }
    if(month == 6){
        monthTime = 'Июль'
    }
    if(month == 7){
        monthTime = 'Август'
    }
    if(month == 8){
        monthTime = 'Сентябрь'
    }
    if(month == 9){
        monthTime = 'Октябрь'
    }
    if(month == 10){
        monthTime = 'Ноябрь'
    }
    if(month == 11){
        monthTime = 'Декабрь'
    }
}

//опеределение дня недели
function getDay(){
    if(day == 1){
        dayWeek = 'Mondey';
    }else if(day == 2){
        dayWeek = 'Tuesday';
    }
    else if(day == 3){
        dayWeek = 'Wednesday';
    }
    else if(day == 4){
        dayWeek = 'Thursday';
    }
    else if(day == 5){
        dayWeek = 'Friday';;
    }
    else if(day == 6){
        dayWeek = 'Saturday';
    }
    else if(day == 7){
        dayWeek = 'Sunday';
    }
    
}

//функция времени суток 
function getTimeOfDate(){
    if((hours >= 6) && (hours < 12) ){
        timeDate = 'morning'
    }else if(hours >= 12 && hours < 18){
        timeDate = 'afternoon'
    }else if(hours >= 18 && hours < 24){
        timeDate = 'evening'
    }else if(hours >= 00 && hours < 6){
        timeDate = 'night'
    }
    console.log(timeDate)
}



greetingsElement.innerHTML = timeDate;
dayOfWeek.innerHTML = `${dayWeek}, ${monthTime} ${num}`;
const inputOfUserName = document.createElement('input');
inputOfUserName.className = 'user__name'
inputOfUserName.id = 'user-name'
inputOfUserName.placeholder = '[ENTER NAME]'
inputOfUserName.name = 'name'
gretingsUser.append(inputOfUserName)


const userLocal = document.querySelector('#user-name')

userLocal.addEventListener('change', getlocalStorage)

function getlocalStorage(){
    let newUserName = userLocal.value
    localStorage.setItem('name', newUserName);

}
if(localStorage.name){
    userLocal.value = localStorage.name
}else{
    userLocal.value = ''
}

