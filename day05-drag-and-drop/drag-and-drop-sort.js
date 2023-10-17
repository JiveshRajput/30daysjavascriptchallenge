const boxes = document.querySelectorAll('.box');
let draggedElement = null;
let items;

function handleDragStart(e) {
    this.style.opacity = '0.4';
    draggedElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('item', this.innerHTML);
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    e.target.classList.add('dragover');
}

function handleDragLeave(e) {
    e.target.classList.remove('dragover');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (draggedElement != this) {
        // console.log(this);
        draggedElement.innerHTML = this.innerHTML;
        draggedElement.setAttribute('data-item', this.innerHTML);

        let replacedItem = e.dataTransfer.getData('item');
        console.log(replacedItem, 'dropped item');
        this.innerHTML = replacedItem;
        this.setAttribute('data-item', replacedItem);
    }
}

function handleDragEnd(e) {
    this.style.opacity = '1';

    boxes.forEach((box) => {
        box.classList.remove('dragover')
    })
}


boxes.forEach((box) => {
    box.addEventListener('dragstart', handleDragStart)
    box.addEventListener('dragenter', handleDragEnter)
    box.addEventListener('dragover', handleDragOver)
    box.addEventListener('dragleave', handleDragLeave)
    box.addEventListener('drop', handleDrop)
    box.addEventListener('dragend', handleDragEnd)
})