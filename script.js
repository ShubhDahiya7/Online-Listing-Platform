
// select form
var form = document.getElementById('addForm');
// select ul
var itemsList = document.getElementById('items');

// add event to form
// event takes 2 arguments - event type , function that happens
// so when we click on submit button additem func will be called and executed.
form.addEventListener("submit", addItem);

// add item function
function addItem(e) {
    e.preventDefault();
    console.log('event fired');
    // get newInput value
    // whatever we wrote in that input/text area gets stored in newItem
    var newitem = document.getElementById('item').value;

    // now we have to create a new item in the ul.
    var li = document.createElement('li');
    // give a class to it.
    li.className = 'list-group-item';

    // add newItem node to li
    var newli = document.createTextNode(newitem)
    li.appendChild(newli);

    // create delete button for each item added
    var button = document.createElement('button');
    // add same classes to button as rest of buttons
    button.className = 'btn btn-danger btn-sm float-right delete';

    // add newItem node to li
    var text = document.createTextNode('X')
    button.appendChild(text);

    // as the buttons are inside the li - we have to append btn inside li
    li.appendChild(button);

    // add updated li to ul list.
    itemsList.appendChild(li);
}

// add event to itemList
itemsList.addEventListener("click", removeItem);

function removeItem(e) {
    // e.target gives us all li's which contains buttons
    // and buttons has a class - delete , so we are checking
    // that we only wants to run this if condn when we click on X button.
    if(e.target.classList.contains('delete'))
    {
        if(confirm('This item will be removed'))
        {
            console.log(1);
            // li is the parent of button so when we click on a btn we wants
            // to store its parent li only.
            var li = e.target.parentElement;

            // remove li from ul.
            itemsList.removeChild(li);
        }
    }
}
