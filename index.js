// Welcome to js file
const newQuote = async () => {
  data = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',{
    method : 'GET',
    headers: {
      'X-Api-Key': 'C9Sef4e3mcscYirFhIuLQA==zhGXNrKTuO5xzQci'
    }
  })
  data = await data.json();
  // document.getELementById('text').innerHTML = data[0].quote;
  // document.getELementById('author').innerHTML = data[0].author;
  document.getElementById('text').innerHTML = data[0].quote;
  document.getElementById('author').innerHTML = data[0].author;
  console.log(data[0].author);
}


const quoteArr = [
  "Be yourself; everyone else is already taken.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
  "The future belongs to those who believe in the beauty of their dreams."
]

const author = [
  "Oscar wild", "Rober Frost", "Steve Jobs", "Winston Churchill", "Elaneor Roosevelt"
]

const randValue = Math.floor(Math.random()*5);

document.getElementById('text').innerHTML = quoteArr[randValue];

document.getElementById('author').innerHTML = author[randValue];

document.getElementById('new-quote').onclick = newQuote;

document.getElementById('tweet-quote').onclick = async () => {
  console.log("djd");
  const data = await fetch('/tweet',{
    method:'POST',
    body:{
      content:document.getElementById('text').innerHTML
    }
  })
};