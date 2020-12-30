// 버튼과 enter눌렀을 때 input창의 애들이 리스트에 추가 되돍한다.
// 이 때 li요소에 휴지통 버튼이 삭제로 달려야한다.

const btn = document.querySelector('#addbtn')

function add() {
  const ipt = document.querySelector('input')
  const temp = document.createElement('li')
  const item = ipt.value
  temp.innerHTML = item
  const delbtn = document.createElement('button')
  delbtn.innerHTML = '삭제'
  temp.appendChild(delbtn)
  delbtn.onclick = function(){temp.remove()}
  const ul = document.querySelector('ul')
  ul.appendChild(temp)
  ipt.value = ''
  console.log('add')
  
}

btn.onclick = add