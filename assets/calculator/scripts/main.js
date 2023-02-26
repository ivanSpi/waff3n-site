var myButtonSum = document.querySelector('.buttonSum')
var myButtonSubs = document.querySelector('.buttonSubs')
var myButtonDiv = document.querySelector('.buttonDiv')
var myButtonMult = document.querySelector('.buttonMult')
var myButtonClean = document.querySelector('.cleaner')
var outputAns = document.querySelector('.output')
var MyButtonReturn = document.querySelector('.return')

let historyWind = document.querySelector('.viewer')

const historyAns = new Array()

function CalculatingSum(){
     var somenum1 = document.getElementById("num1").value
     var somenum2 = document.getElementById("num2").value
     let num1 = Number.parseInt(somenum1,10)
     let num2 = Number.parseInt(somenum2,10)
     outputAns.textContent = num1+num2
     historyAns.push(outputAns.textContent)
     historyWind.textContent += ` Operation sum : ${num1} + ${num2} `
  }
function CalculatingSubs(){
    var somenum1 = document.getElementById("num1").value
    var somenum2 = document.getElementById("num2").value
    let num1 = Number.parseInt(somenum1,10)
    let num2 = Number.parseInt(somenum2,10)
    outputAns.textContent = num1-num2
    historyAns.push(outputAns.textContent)
    historyWind.textContent += ` Operation substract : ${num1} - ${num2} `
 }
function CalculatingDiv(){
  var somenum1 = document.getElementById("num1").value
  var somenum2 = document.getElementById("num2").value
  let num1 = Number.parseInt(somenum1,10)
  let num2 = Number.parseInt(somenum2,10)
  outputAns.textContent = (num1/num2).toFixed(3)
  historyAns.push(outputAns.textContent)
  historyWind.textContent += ` Operation div : ${num1} / ${num2} `
}
function CalculatingMult(){
  var somenum1 = document.getElementById("num1").value
  var somenum2 = document.getElementById("num2").value
  let num1 = Number.parseInt(somenum1,10)
  let num2 = Number.parseInt(somenum2,10)
  outputAns.textContent = num1*num2
  historyAns.push(outputAns.textContent)
  historyWind.textContent += ` Operation multiply : ${num1} * ${num2} `
}
function CleanAll(){
  var itemToClear1 = document.getElementById("num1")
  var itemToClear2 = document.getElementById("num2")
  itemToClear1.value = ''
  itemToClear2.value = ''
  outputAns.textContent = ''
  historyWind.textContent = ''
}




myButtonSum.onclick = function(){
  CalculatingSum()
}
myButtonSubs.onclick = function(){
  CalculatingSubs()
}
myButtonDiv.onclick = function(){
  CalculatingDiv()
}
myButtonMult.onclick = function(){
  CalculatingMult()
}

//var txtblock = document.querySelector('.txtblock')
//const list = document.createElement('ul')


//txtblock.appendChild(list)

myButtonClean.onclick = function(){
  CleanAll()
}

MyButtonReturn.onclick = () => {
  var itemToClear1 = document.getElementById("num1")
  var itemToClear2 = document.getElementById("num2")
  itemToClear1.value = ''
  itemToClear2.value = ''
  if(outputAns.textContent === historyAns[historyAns.length - 1]) historyAns.pop()
    outputAns.textContent = historyAns.pop()

}

  //const listItem = document.createElement('li')
  //const listContent = prompt('Any content: ')


  //listItem.textContent = listContent
  





