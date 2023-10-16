const output = document.getElementById('output');
const fileDropzone = document.getElementById('file-dropzone');

if (window.File && window.FileList) {

    fileDropzone.addEventListener('dragover', handleDragOver)
    fileDropzone.addEventListener('dragleave', handleDragLeave)
    fileDropzone.addEventListener('drop', handleDrop)

}

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy'
    fileDropzone.classList.add('dragover');
}

function handleDragLeave(e) {
    fileDropzone.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    fileDropzone.classList.remove('dragover');
    for (const file of e.dataTransfer.files) {
        const name = file.name;
        const size = file.size ? Math.round(file.size / 1000) : 0;

        if (file.type && file.type.startsWith('image/')) {
            const li = document.createElement('li');
            li.textContent = `${name} (${size}KB)`;
            output.appendChild(li);
        }

    }
}