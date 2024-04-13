const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click',getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click',getAnswer);

const answerText = document.querySelector("#js-answer-text");

const endpoint = 'https://cat-fact.herokuapp.com';

let answer ='';

async function getQuote() {

    try{
        const response = await fetch(endpoint);
        if (!response.ok){
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json['facts']);
        displayQuote(json['facts']);
        answerText.textContent = '';
    } catch (err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer(){
    answerText.textContent = answer;
}
getQuote();
