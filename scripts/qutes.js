const apiUrl = `https://type.fit/api/quotes`
const quotesBody = document.querySelector('.quote_body')
const btnquote = document.querySelector('.btnquote')
let a = 1;

getApiRes()

btnquote.addEventListener('click', getApiRes)

function getApiRes(){
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => updateQuote(data))
}


function updateQuote(data){
    a = (Math.random()* (1 + 1500)- 1).toFixed(0)
    quotesBody.innerHTML = ''
    quotesBody.append(data[a].text)
}

