// 1. 당근과 벌레를 랜덤배치하는 함수
// 2. 타이머 시작하고 멈추는 함수

const CARROT_SIZE = 80
const CARROT_CNT = 5
const BUG_CNT = 5
const CARROT_IMG_PATH = 'img/carrot.png'
const BUG_IMG_PATH = 'img/bug.png'

const bgm = new Audio('sound/bg.mp3')

const gameField = document.querySelector(".game__field")
const gameField_clientRect = gameField.getBoundingClientRect()
const gameBtn = document.querySelector(".game__btn")
const gameTimer = document.querySelector(".game__timer")
const gameScoreBoard = document.querySelector(".game__score")
const popup = document.querySelector('.popup')
const popupReplay = document.querySelector('.popup__replay')
const popupMsg = document.querySelector('.popup__message')
const time_limit = 10

let timer
let remaining_time = time_limit
let started = false
let score = 0



function showPopup(win) {
  if(!win) {
    popupMsg.innerHTML = "개 못행~~"
  } else {
    popupMsg.innerHTML = "이김~~"
  }
  popup.classList.remove('popup--hide')
}

function hidePopup() {
  popup.classList.add('popup--hide')

}

function hideGamebtn() {
  gameBtn.style.visibility = 'hidden'
}

function showStopBtn() {
  gameBtn.style.visibility = ''
  gameBtn.innerHTML= `<i class="fas fa-stop"></i>`
}

function startGame(){
  started = true
  score = 0
  updateScore()
  startTimer()
  initGame()
  showStopBtn()
  bgm.play()
}

function stopGame(win){
  started = false
  remaining_time = time_limit
  score = 0
  gameField.innerHTML = ''
  stopTimer()
  showPopup(win)
  hideGamebtn()
  bgm.pause()
}

function updateTime(remaining_time){
  const min = Math.floor(remaining_time/60)
  const sec = remaining_time%60
  gameTimer.innerHTML = `${min}:${sec}`
}

function startTimer(){
  updateTime(remaining_time)
  timer = setInterval(function(){
    remaining_time -= 1
    updateTime(remaining_time)
    if(remaining_time<= 0) {
      stopGame(false)
    }
  },1000)
}

function stopTimer(){
  if(timer){
    clearInterval(timer)
  }
}

function updateScore() {
  gameScoreBoard.innerHTML = `${CARROT_CNT-score}`
  if(score === CARROT_CNT) {
    stopGame(true)
    return;
  }
  
}

function initGame() {
  
  addItem('carrot',5, CARROT_IMG_PATH)
  addItem('bug',5, BUG_IMG_PATH)
}

function addItem(className, cnt, img_path) {
  const x1 = 0
  const y1 = 0
  const x2 = gameField_clientRect.width-CARROT_SIZE
  const y2 = gameField_clientRect.height-CARROT_SIZE
  for(let i = 0; i < cnt; i++){
    const item = document.createElement('img')
    item.setAttribute('class', className)
    item.setAttribute('src',img_path)
    item.style.position = 'absolute'
    const x = RandomNumber(x1,x2)
    const y = RandomNumber(y1,y2)
    item.style.left = `${x}px`
    item.style.top = `${y}px`
    gameField.appendChild(item)
  }
}

function RandomNumber(min,max){
  return Math.random() * (max - min) + min;
}

// initGame()
// startTimer()
gameBtn.addEventListener('click', () =>{
  console.log(started)
  if(!started){
    startGame()
  } else {
    stopGame(false)
  }
})

popupReplay.addEventListener('click', () => {
  startGame()
  showStopBtn()
  hidePopup()
})

gameField.addEventListener('click', (event) => {
  if(started){
    const target = event.target.className
    if(target === 'carrot') {
      event.target.remove()
      score += 1
      updateScore()
    } else if(target === 'bug') {
      // console.log('b')
      stopGame(false)
    }
  }
})