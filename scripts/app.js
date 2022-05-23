

// поиск нужного места из документа
const nowTime = document.querySelector('#clock-of-data')
const dayOfWeek = document.querySelector('#data-of-day')
const greetingsElement = document.querySelector('#time-of-date')
const gretingsUser = document.querySelector('#gretings-user')


//здесь вытягиваю нужные мне значения из даты
let date = new Date()
const hours = date.getHours();
const day = date.getDay();
const month = date.getMonth();
const num = date.getDate()
// const time = date.toLocaleTimeString();

// console.log(time)



//нужные перменные 
let timeDate = '';
let dayWeek = '';
let monthTime = '';
let timeOfdate = '';

//вызов функции
getTimeOfDate()
getDay()
getMonth()
showTime()

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
        monthTime = 'май'
    }
    if(month == 5){
        monthTime = 'Июнь'
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
    if(hours >= 6 && hours < 12 ){
        timeDate = 'morning'
    }else if(hours >= 12 && hours < 18){
        timeDate = 'day'
    }else if(hours >= 18 && hours < 00){
        timeDate = 'evening'
    }else if(hours >= 00 && hours < 6){
        timeDate = 'nigth'
    }
}

greetingsElement.innerHTML = timeDate;

dayOfWeek.innerHTML = `${dayWeek},${monthTime} ${num}`;
const inputOfUserName = document.createElement('input');
inputOfUserName.className = 'user__name'
inputOfUserName.placeholder = '[ENTER NAME]'
gretingsUser.append(inputOfUserName)


