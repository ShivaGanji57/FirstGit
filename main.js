let form=document.getElementById('addForm')
var itemList=document.getElementById('items')
//form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem)
//addItem function
function addItem(e){
    e.preventDefault()

    var newItem=document.getElementById('item').value;

    var li=document.createElement('li')
    li.className='list-group-item'
    console.log(li)

    li.appendChild(document.createTextNode(newItem))
    //add delete button
    var deletebtn=document.createElement('button')
    deletebtn.className='btn btn-danger btn-sm float-right delete'
    deletebtn.appendChild(document.createTextNode('X'))
    li.appendChild(deletebtn)

    //add edit button
    var editbtn=document.createElement('button')
    editbtn.className='btn btn-info btn-sm float-right edit'
    editbtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(editbtn)
    itemList.appendChild(li)
}

// remove item from list
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

