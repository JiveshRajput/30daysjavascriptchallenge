// 01 write a funciton to memoize the result?

function memoize(cb) {
    const results = {};
    return function(...args) {
        const stringifiedArgs = JSON.stringify(args);
        if(results[stringifiedArgs]) {
            return results[stringifiedArgs];
        }
        
        const value = cb(...args);
        results[stringifiedArgs] = value;
        return value;
    }

}

const sumMemo = memoize((a, b)=> a+b)
const res = sumMemo(2, 5);
const res2 = sumMemo(5, 5);
const res3 = sumMemo(2, 5);