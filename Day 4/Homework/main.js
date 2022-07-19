const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

var randomMovie = movies[Math.floor(Math.random() * movies.length)];
var randomTitle = randomMovie.title;
var randomExplanation = randomMovie.explanation;
var randomHint = randomMovie.hint;
document.getElementById('randomHint').innerHTML = randomExplanation;

const submitButton = document.getElementById("submitButton");
const hintButton = document.getElementById("hintButton");
const guess = document.getElementById('guess-input');

submitButton.addEventListener('click', (event) => {
    if (guess === randomTitle) {
        document.getElementById('randomHint').innerHTML = "Success! You're a movie nerd huh: " + randomExplanation;
    }
    else {
        console.log("Try Again you suck!");
        document.getElementById('guess-input').innerHTML = '';
    }
    console.log(randomTitle);
    console.log(guess);
});
hintButton.addEventListener('click', (event) => {
    document.getElementById('randomHint').innerHTML = randomHint;
    console.log(randomHint);
});
