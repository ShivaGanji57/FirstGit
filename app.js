console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.forms)

var items=document.getElementsByClassName('list-group-item')
console.log(items)
items[1].textContent='Shiva';
items[1].style.fontWeight='bold'
items[1].style.color='green'
items[1].style.backgroundColor='pink'
items[2].style.backgroundColor='green'
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}

//getElement by tag name
let li=document.getElementsByTagName('li')
li[0].style.backgroundColor='red'
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold'
}

//2nd element background color green using querySelector
let secondItem=document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.backgroundColor='green'
secondItem.style.color='black'

//3rd item invisible
let thirditem=document.querySelector('.list-group-item:nth-child(3)')
//thirditem.style.display='none'

//2nd element font-color to green using querySelectorAll
let queryItems=document.querySelectorAll('.list-group-item')
queryItems[1].style.color='green'
queryItems[1].style.backgroundColor='pink'

//all od elements backgroundColor green using querySelectorAll
for(let i=0;i<queryItems.length;i++){
    queryItems[i].style.backgroundColor='green'
    i++;
}

// task1: add HEllo word before Item Lister
let newVar=document.createElement('h3');
console.log(newVar)
let newText=document.createTextNode('Hello world')
newVar.appendChild(newText)

let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')
container.insertBefore(newVar,h1);

//task2: add HEllo word before Item 1
let newVar1=document.createElement('h3');
console.log(newVar)
let newText1=document.createTextNode('Hello world')
newVar1.appendChild(newText1)

let newDiv=document.querySelectorAll('body .container')
// getting the correct parent node
let last=newDiv[1].firstElementChild
//getting the childnode
let ul=last.lastElementChild
last.insertBefore(newVar1,ul)