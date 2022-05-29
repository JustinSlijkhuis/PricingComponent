/* variables */
const slider = document.getElementById('slider')
const billingType = document.getElementById('billing-type')
const moneyInfo = document.getElementById('money-info')
const pageviewInfo = document.getElementById('pageview-info')


/* slider variables */
let sliderValue = slider.value
let pricePerMonth = `$16.00`
let pageviews = `100K PAGEVIEWS`

/* slider */
const updateSliderValue = _ => {
    sliderValue = slider.value
    setVariables()
    pageviews += ' PAGEVIEWS'
    checkForDiscount()
    setValues()
}

const setVariables = _ => {
    switch(Number(sliderValue)) {
        case 1:
            pricePerMonth = `$8.00`
            pageviews = `10K`
            break;
        case 2:
            pricePerMonth = `$12.00`
            pageviews = `50K`
            break;
        case 3:
            pricePerMonth = `$16.00`
            pageviews = `100K`
            break;
        case 4:
            pricePerMonth = `$24.00`
            pageviews = `500K`
            break;
        case 5:
            pricePerMonth = `$36.00`
            pageviews = `1M`
            break;
    }
}

const checkForDiscount = _ => {
    if(billingType.checked) {
        let oldPrice = pricePerMonth.slice(1, 3)
        let newPrice = oldPrice / 100 * 75
        pricePerMonth = `$${newPrice}.00`
    }
}

const setValues = _ => {
    moneyInfo.textContent = pricePerMonth
    pageviewInfo.textContent = pageviews
}


/* event listeners */
slider.addEventListener('input', updateSliderValue)
billingType.addEventListener('click', updateSliderValue)