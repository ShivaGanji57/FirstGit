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