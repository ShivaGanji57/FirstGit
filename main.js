let form=document.getElementById('addForm')
var itemList=document.getElementById('items')
//form submit event
form.addEventListener('submit',addItem);

//addItem function
function addItem(e){
    e.preventDefault()

    var newItem=document.getElementById('item').value;

    var li=document.createElement('li')
    li.className='list-group-item'
    console.log(li)

    li.appendChild(document.createTextNode(newItem))

    var deletebtn=document.createElement('button')
    deletebtn.className='btn btn-danger btn-sm float-right delete'
    deletebtn.appendChild(document.createTextNode('X'))
    li.appendChild(deletebtn)
    itemList.appendChild(li)
}
