// Javascript (script.js)
function addItem() {
    const newItemInput = document.getElementById('newItem');
    const itemList = document.getElementById('itemList');

    if (newItemInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${newItemInput.value}</span>
            <button class="complete-btn" onclick="toggleComplete(this)"></button>
            <button class="remove-btn" onclick="removeItem(this)"></button>
        `;
        itemList.appendChild(li);
        newItemInput.value = '';
    }
}

function removeItem(button) {
    const item = button.parentNode;
    const itemList = document.getElementById('itemList');
    itemList.removeChild(item);
}

function toggleComplete(button) {
    const item = button.parentNode;
    item.classList.toggle('completed');
}
