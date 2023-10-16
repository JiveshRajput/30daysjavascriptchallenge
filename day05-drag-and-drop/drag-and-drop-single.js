const item = document.querySelector('.item');
const boxes = document.querySelectorAll('.box');

// Applying drag event on item
item.addEventListener('dragstart', handleDragStart)

// Applying Drop event on boxes
boxes.forEach((box) => {
    box.addEventListener("dragenter", handleDragEnter)
    box.addEventListener("dragover", handleDragOver)
    box.addEventListener("dragleave", handleDragLeave)
    box.addEventListener("drop", handleDrop)
})

// drag functions
function handleDragStart(e) {
    e.dataTransfer.setData('id', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

// drop functions
function handleDragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function handleDragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.classList.remove('drag-over');
}

function handleDrop(e) {
    e.target.classList.remove('drag-over');

    const id = e.dataTransfer.getData('id');
    const draggable = document.getElementById(id);

    e.target.appendChild(draggable);
    draggable.classList.remove('hide');
}