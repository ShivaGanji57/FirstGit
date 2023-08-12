let form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')
//form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItems)
//addItem function
function addItem(e){
    e.preventDefault()

    var newItem=document.getElementById('item').value;
    //get description value
    var newDesc=document.getElementById('itemDescription').value;
    var li=document.createElement('li')
    li.className='list-group-item'
    console.log(li)

    li.appendChild(document.createTextNode(newItem))
    //add description to li
    li.appendChild(document.createTextNode(' '+newDesc))
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

// assignment-9 task1  show me those items from the list which match my search string
// assignment 10 : task 4 Now when we try to search, check both the name of the item and the description
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        //get description
        var itemDesc=item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text) !=-1 || itemDesc.toLowerCase().indexOf(text) !=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    });
}

