const inputText = document.getElementById('inputText')

function simpleDebounce(cb, timeout = 500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this, args)
        }, timeout);
    }
}

const inputAction = simpleDebounce((e) => {
    console.log("Value : ", e.target.value);
});

inputText.addEventListener('keyup', inputAction)
