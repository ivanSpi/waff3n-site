
let itemInfo1 = document.getElementById('info1')
let itemInfo2 = document.getElementById('info2')
let itemInfo3 = document.getElementById('info3')

window.onscroll = function(){
  scrollFunction()
} 

function scrollFunction(){
  let scrollY = window.scrollY
  if (scrollY > 600 && scrollY < 850 ){
    unfocusItem(itemInfo2)
    unfocusItem(itemInfo3)
    focusingBlock(itemInfo1)
  }
  else if (scrollY > 1100 && scrollY < 1300){
    unfocusItem(itemInfo1)
    unfocusItem(itemInfo3)
    focusingBlock(itemInfo2)
  }
  else if (scrollY > 1700 && scrollY < 1900){
    unfocusItem(itemInfo1)
    unfocusItem(itemInfo2)
    focusingBlock(itemInfo3)
  }
  else {
    unfocusItem(itemInfo1)
    unfocusItem(itemInfo2)
    unfocusItem(itemInfo3)
  } 
}
      

function focusingBlock(focusItem){
  focusItem.style.flex = '2'
  focusItem.style.width = '130%'
  focusItem.style.position = 'relative'
  focusItem.style.alignSelf = 'center'
  focusItem.style.border = '2px solid white'
}
function unfocusItem(unfocusItem){
  unfocusItem.style.flex = '1'
  unfocusItem.style.width = '100%'
  unfocusItem.style.position = 'inherit'
  unfocusItem.style.alignSelf = 'center'
  unfocusItem.style.border = '0'
}

class News {
  constructor(title,span,image){
    this.title = title
    this.span = span
    this.image = 'images/' + image
  }
  upload(){
    let div = document.createElement('div')
    let pTitle = document.createElement('p')
    let spanText = document.createElement('span')
    pTitle.textContent = this.title
    spanText.textContent = this.span
    div.appendChild(pTitle)
    pTitle.appendChild(spanText)
    div.style.backgroundImage = 'url(' + this.image + ')'
    return div
  }
}


const news = document.querySelector('.news')
const btnRight = document.querySelector('.switcher-right')
const btnLeft = document.querySelector('.switcher-left')
const listOfNews = [
  new News('Minecraft','Some type of mine','minecraft.jpg'),
  new News('Roblox','Some roblox text nnn shiiiet','roblox.jpg'),
  new News('Motivation','Not tiring just firing','movation.png'),
  new News('Hmm its maybe should work','type text 404 error msg(joke)','minecraft.jpg')
]

for ( let i = 0; i < 2; i ++ ){
    news.appendChild(listOfNews[i])
    listOfNews.pop(listOfNews.shift())
}
btnRight.onclick = () => {

  news.remove(news.lastChild)
  let a = listOfNews.shift()
  listOfNews.pop(a)
  news.appendChild(a)
}
btnLeft.onclick = () => {

  news.remove(news.firstChild)
  let a = listOfNews.push()
  listOfNews.unshift(a)
  news.appendChild(a)
}

