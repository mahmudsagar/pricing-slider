console.log('everything is fine no worries')

const slider = document.querySelector('#price_slider');
const customSlider = document.querySelector('#custom-fill')
const pageViews = ['10K', '50K', '100K', '500K', '1M']
const payment = ['8', '12', '16', '24', '36']
const views = document.querySelector('#views')
const ppm = document.querySelector('#card__ppm')
const discount = document.querySelector('#discount-togle')

discount.addEventListener('input', function(){
    const value = Number(slider.value)
    const parcentage = (value * 25) + '%';
    views.innerHTML = pageViews[value];
    let rate = payment[value] - (discount.checked ? payment[value] * 0.25: 0)
    console.log(rate)
    ppm.innerHTML = '$'+ rate +'.00'
    customSlider.style.width = parcentage
})

slider.addEventListener('input', function (event) {
    const value = Number(slider.value)
    const parcentage = (value * 25) + '%';
    views.innerHTML = pageViews[value];
    let rate = payment[value] - (discount.checked ? payment[value] * 0.25: 0)
    ppm.innerHTML = '$'+ rate +'.00'
    customSlider.style.width = parcentage
})
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
window.onresize = function (discount) {
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width >= 900) {
        document.querySelector('.discount').innerHTML = '25% discount';
    } else {
        document.querySelector('.discount').innerHTML = '-25%';
    }
}
window.onload = function (discount) {
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width >= 900) {
        document.querySelector('.discount').innerHTML = '25% discount';
    } else {
        document.querySelector('.discount').innerHTML = '-25%';
    }
}
// width.addEventListener('change', function(discount){
//     if (width >= 900) {
//         document.querySelector('.discount-text').innerHTML = '25% discount';
//     }else{
//         document.querySelector('.discount-text').innerHTML = '-25%';
//     }
// })