// Today we are creating Make a Cake Program using Promises:-

/*
Make a cake
1. bake a cake base
2. put cream give options => pink, green, yellow
3. put cherries => sprinkles, cherry
4. cake is ready
*/

const base = ['Maida', 'Flour'], cream = ['Cream', 'Fruit'], toppings = ['Sprinkles', 'Cherry'];

function orderCake(isMake = true) {
    return new Promise((resolve, reject) => {
        if (isMake) {
            console.log('Start making cake : ');
            resolve(base)
        } else {
            reject('Not making Cake');
        }
    })
}

function chooseBase(base) {
    return new Promise((resolve, reject) => {
        if (base) {
            setTimeout(() => {
                console.log(`You chose ${base} as a base.`)
                resolve({ cream, base });
            }, 1000);
        } else {
            reject(`You didn't provided base.`)
        }
    })
}

function chooseCream(cream, base) {
    return new Promise((resolve, reject) => {
        if (cream) {
            setTimeout(() => {
                console.log(`You chose ${cream} as a cream.`);
                resolve({ toppings, cream, base });
            }, 1000);
        } else {
            reject(`You didn't provided cream.`)
        }
    })
}

function chooseToppings(topping, cream, base) {
    return new Promise((resolve, reject) => {
        if (topping) {
            setTimeout(() => {
                console.log(`You chose ${topping} as a topping.`);
                resolve({ topping, cream, base });
            }, 1000);
        } else {
            reject(`You didn't provided toppings`)
        }
    })
}

function makeACakeWithPromise() {
    orderCake()
        .then((base) => {
            // Choose Base 
            return chooseBase(base[1]);
        }).then(({ cream, base }) => {
            // Choose Cream 
            return chooseCream(cream[0], base);
        }).then(({ toppings, cream, base }) => {
            // Choose Toppings 
            return chooseToppings(toppings[1], cream, base);
        }).then(({ topping, cream, base }) => {
            // Cake is ready
            console.log(`Yeah!!! Your cake with ${base} base, ${cream} cream, ${topping} toppings is ready.`)
        }).catch((err) => {
            console.log(err);
        })
}


async function makeACakeWithAsyncAwait() {
    try {
        const base = await orderCake();
        const { cream, base: base1 } = await chooseBase(base[1]);
        const { toppings, cream: cream1, base: base2 } = await chooseCream(cream[0], base1);
        const { topping, cream: cream2, base: base3 } = await chooseToppings(toppings[1], cream1, base2);

        console.log(`Yeah!!! Your cake with ${base3} base, ${cream2} cream, ${topping} toppings is ready.`)
    } catch (error) {
        console.log(error)
    }
}

// makeACakeWithPromise();
// makeACakeWithAsyncAwait();