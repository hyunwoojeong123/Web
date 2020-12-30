

document.onmousemove = function(event){
  // console.log(event.clientX + "," + event.clientY)
  const target = document.querySelector('#target')
  const vL = document.querySelector('.vL')
  const hL = document.querySelector('.hL')
  const pos = document.querySelector('#pos')
  pos.innerHTML= event.clientY + "px," + event.clientX + "px"
  target.style.top = event.clientY + "px"
  target.style.left = event.clientX + "px"
  
  vL.style.left = event.clientX+28 + "px"
  hL.style.top = event.clientY +28+ "px"
  
  // console.log(target.style.top, target.style.left)
  // console.log(target.style)
  // target.setAttribute()
  // console.log(target.clientLeft,target.clientTop)
}

