// const _ = require('lodash');

// Debounce implementation
const btn = document.querySelector(".increment_btn")
const btnPress = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")

var pressedCount = 0
var triggerCount = 0

// with lodash method
// const debounceCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount
// }, 800)

// polyfill method
const myDebounce = (cb, d) => {
    let timer;
    
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args)
        }, d)
    }
}

const debounceCount = myDebounce(() => {
    count.innerHTML = ++triggerCount
}, 800)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
})

// throttle implementation
const btn1 = document.querySelector(".increment_btn1")
const btnPress1 = document.querySelector(".increment_pressed1")
const count1 = document.querySelector(".increment_count1")

var pressedCount1 = 0
var triggerCount1 = 0

const start = new Date().getTime();

//with lodash method
// const throttledCount = _.throttle(() => {
//     const now = new Date().getTime()
//     console.log(now - start);
//     count1.innerHTML = ++triggerCount1
// }, 800)

// polyfill method
const myThrottle = (cb, d) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - last < d) {
            return;
        }
        last = now;
        return cb(...args)
    }

}

const throttledCount = myThrottle(() => {
    const now = new Date().getTime()
    console.log(now - start);
    count1.innerHTML = ++triggerCount1
}, 800)

btn1.addEventListener("click", () => {
    btnPress1.innerHTML = ++pressedCount1;
    throttledCount();
})
