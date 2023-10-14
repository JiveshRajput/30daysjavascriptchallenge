const btn = document.getElementById('btn');

// Throttle function with Time
function throttleWithTime(cb, delay = 500) {
    let prev = 0;
    return (...args) => {
        const now = new Date().getTime();
        // console.log('Time : ', now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return cb(...args);
        }
    }
}

// Throttle function with Flag
function throttleWithFlag(cb, delay = 500) {
    let wait = false;

    return (...args) => {
        // console.log("Wait : ", wait)
        if (wait) return;

        cb(args);
        wait = true;

        setTimeout(() => { wait = false }, delay);
    }
}


const handleClick = throttleWithTime(() => {
    console.log('Clicked on Button')
}, 1500)

btn.addEventListener('click', handleClick)
