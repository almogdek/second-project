const textBox = document.querySelector('#text-box');
const submitButton = document.querySelector('#submit-button');
const itemDiv = document.querySelector('#item1');
const itemContainer = document.querySelector('#items');
let taskCount = 1;
const removeButton = document.querySelector('#remove-button');
function addTask() {
    taskCount++;
    let inputValue = textBox.value;
    const clonedItemDiv = itemDiv.cloneNode(true);
    clonedItemDiv.textContent = inputValue;
    clonedItemDiv.id = `item${taskCount}`;
    itemContainer.appendChild(clonedItemDiv);
    textBox.value = '';
    const propertyButtons = document.createElement('div')
    propertyButtons.id = 'propertyButtons';
    clonedItemDiv.appendChild(propertyButtons);
    const removeButton = document.createElement("button");
    removeButton.id = `removeButton${taskCount}`;
    removeButton.classList.add("buttons");
    removeButton.classList.add('removeButtons');
    removeButton.innerHTML = '<img src="icons/trashBin.svg" class="trash-icon" alt="Remove">';
    const editButton = document.createElement("button");
    editButton.id = `editButton${taskCount}`;
    editButton.classList.add("buttons");
    editButton.classList.add('editButtons');
    editButton.innerHTML = '<img src="icons/editIcon.svg" class="edit-icon">';
    propertyButtons.appendChild(editButton);
    editButton.addEventListener('click', function() {
        clonedItemDiv.innerHTML = '<input  type="text">'
    propertyButtons.appendChild(removeButton);
    removeButton.addEventListener('click', function () {
        taskCount--;
        clonedItemDiv.remove();
    })
    console.log(removeButton);
    
}
submitButton.addEventListener('click', function () {
    if (textBox.value !== '') {
        addTask();
        textBox.blur();
    }
    else if (textBox.value === '') {
        alert('Please enter a task');
    }
});
textBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && textBox.value !== '' ) {
        addTask();
        textBox.blur();
    }
    else if (event.key === 'Enter' && textBox.value === '') {
        alert("Please enter a task");
    }
});


