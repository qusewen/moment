const playList = [
    {
        title: 'Aqua Caelestis',
        src: 'assets/sounds/AquaCaelestis.mp3',

    },
    {
        title: 'Ennio Morricone',
        src: 'assets/sounds/EnnioMorricone.mp3',

    },
    {
        title: 'River Flows In You',
        src: 'assets/sounds/RiverFlowsInYou.mp3',

    },
    {
        title: 'Summer Wind',
        src: 'assets/sounds/SummerWind.mp3',

    }


]


console.log(playList.title)
const playAudioBtn = document.querySelector('#playBtn')
const pauseBtn = document.querySelector('.pauseBtn')
const audio = document.querySelector('.music')
const playListContainer = document.querySelector('.playlist_container')
const prevsound = document.querySelector('#prev-sound')
const nexsound = document.querySelector('#next-sound')
let isPlay = 'false';
let count = 0;

for(let key in playList){
    const li = document.createElement('li')
    li.classList.add('play-item')
    li.innerHTML = `${playList[key].title}`
    playListContainer.append(li)
}
let newEll = document.querySelectorAll('.play-item')
prevsound.addEventListener('click', prev)
nexsound.addEventListener('click', next)
function prev(){
    playAudioBtn.src = 'assets/svg/pause.svg'
    if(count === 0){
        count = playList.length 
    }
    count --
    audio.src = playList[count].src
    newEll.forEach((i) => {
        if(i.innerHTML === playList[count].title){
            console.log(i.value)
            i.classList.add('active-item')
        }else{
            i.classList.remove('active-item') 
        }
    })
    audio.play()

}
console.log(count)
function next(){
    playAudioBtn.src = 'assets/svg/pause.svg'
    count ++
    if(count === playList.length ){
        count = 0 
    }

    audio.src = playList[count].src
    newEll.forEach((i) => {
        if(i.innerHTML === playList[count].title){
            console.log(i.value)
            i.classList.add('active-item')
        }else{
            i.classList.remove('active-item') 
        }
    })
    audio.play()
}





function plays(){
    newEll.forEach((i) =>{
        if(i.innerHTML === playList[count].title){
            console.log(i.value)
            i.classList.add('active-item')}
    })

    if(!isPlay){
        isPlay = true;
        audio.currentTime = 0;
        audio.play()

        playAudioBtn.src = 'assets/svg/pause.svg'
        playAudioBtn.classList.toggle = 'pauseBtn'
    }else{
        isPlay = false
        audio.pause()
        playAudioBtn.src = 'assets/svg/play.svg'
    }

    
}


playAudioBtn.addEventListener('click', plays)



