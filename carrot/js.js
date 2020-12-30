// 벌레, 당근 랜덤 배치
const ground = document.querySelector(".ground")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function locate() {
  //벌레 7개, 당근 10개 만든 다음 position relative, top,left는 랜덤으로 준다.
  function make_bug(){
    const bug = document.createElement('img')
    bug.setAttribute('src','img/bug.png')
    bug.style.position = "relative"
    const top = getRandomInt(0,70)
    const left = getRandomInt(0,60)
    bug.style.top = `${top}%`
    bug.style.left = `$(left)%`
    ground.appendChild(bug)
  }
  function make_carrot(){
    const carrot = document.createElement('img')
    carrot.setAttribute('src','img/carrot.png')
    carrot.style.position = "relative"
    const top = getRandomInt(0,70)
    const left = getRandomInt(0,60)
    carrot.style.top = `${top}%`
    carrot.style.left = `$(left)%`
    ground.appendChild(carrot)
  }
  for(let i = 0; i < 10; i++){
    if(i < 7){
      make_bug()
    }
    make_carrot()
  }
}



// 게임 시작하면 10초에서 시간 줄게 한다. 0초가 되면 게임 오버
// 벌레 골라도 게임 오버
// 당근 하나씩 없앨 때마다 카운트가 하나씩 줄어 든다.
const playbtn = document.querySelector(".playbtn")
// let startTime
function gameStart() {
  //타이머 시작
  locate()
  let startTime
  console.log('타이머시작')
  if(! startTime){
    startTime = new Date().getTime()
  }
  timerStart = setInterval(function(){
    let nowTime = new Date().getTime()
    let newTime = new Date(nowTime-startTime)

    let sec = newTime.getSeconds()
    let milisec = Math.floor(newTime.getMilliseconds() / 10)
    if(sec < 10){
      sec = '0'+sec
    }
    if(milisec < 10){
      milisec = '0'+milisec
    }
    if(sec >= 10){
      clearInterval(timerStart)
    }
    document.querySelector(".timeboard").innerHTML = sec+":"+milisec
  })
}


// playbtn.onclick = gameStart()
playbtn.addEventListener('click',gameStart)