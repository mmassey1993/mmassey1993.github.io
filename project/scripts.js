'use strict';
const app = document.getElementById('root');
const logo = document.getElementById('logo');
logo.innerHTML = "Just for Jokes";
const about = document.getElementById('About');
about.innerHTML = "Do your friends tell you your not funny? Do you want to enhance your joke knowledge? Are you a programmer who appreciates a good computer pun? Then you're in the right place for a large catalog of jokes to tell your colleagues, starting Monday.";

const general = document.getElementById('GeneralJokes');
const programming = document.getElementById('ProgrammingJokes');
const knock = document.getElementById('Knock-knock');


let request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(joke => {
            let jokeType = joke.type.charAt(0).toUpperCase() + joke.type.substring(1);
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            const h2 = document.createElement('h2');
            h2.textContent = jokeType;
            const question = document.createElement('p');
            const answer = document.createElement('p');
            question.textContent = `Q: ${joke.setup}`;
            question.setAttribute('id', 'question');
            answer.textContent = ` A: ${joke.punchline}`;
            answer.setAttribute('id', `answer`);


            if (jokeType == "General"){
                general.appendChild(card);
                card.appendChild(h2);
                card.appendChild(question);
                card.appendChild(answer);
            } else if (jokeType == "Knock-knock"){
                knock.appendChild(card);
                card.appendChild(h2);
                card.appendChild(question);
                card.appendChild(answer);
            } else if (jokeType == "Programming") {
                programming.appendChild(card);
                card.appendChild(h2);
                card.appendChild(question);
                card.appendChild(answer);
            }
        });
    } else {
        console.log(`error response ${request.status}`)
    }
};
request.send();



