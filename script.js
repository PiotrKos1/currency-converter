const leftInput = document.querySelector('.left-input')
const nameOneCurrency = document.querySelector('#currency-one')
const score = document.querySelector('.score')
const nameTwoCurrency = document.querySelector('#currency-two')
const actuallyRate = document.querySelector('.actually')



const exchangeRate = () => {
    let currencyOne = nameOneCurrency.options[nameOneCurrency.selectedIndex].text
    let currencyTwo = nameTwoCurrency.options[nameTwoCurrency.selectedIndex].text
    let amount = leftInput.value
    axios.get(`https://api.exchangerate.host/convert?from=${currencyOne}&to=${currencyTwo}&amount=${amount}`).then(res => {
        let result = res.data.result;
        let rate = Math.floor(res.data.info.rate*100)/100
    score.textContent = Math.floor(result*100)/100;
    actuallyRate.textContent = amount + ' ' + currencyOne + ' ' + '=' + ' ' + rate + ' ' + currencyTwo
    console.log(res.data.info.rate)
    })
}



nameOneCurrency.addEventListener('change', exchangeRate)
nameTwoCurrency.addEventListener('change', exchangeRate)
leftInput.addEventListener('input', exchangeRate)
exchangeRate()