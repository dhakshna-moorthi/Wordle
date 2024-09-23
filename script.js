const fiveLetterWords = ["apple", "brave", "chair", "dance", "earth", "flame", "grape", "heart", "index", "jolly", "knack", "lemon", "magic", "noble", "ocean", "piano", "queen", "robot", "swing", "table", "unite", "vivid", "witty", "xenon", "yacht", "zebra", "actor", "baker", "crane", "drive", "eagle", "frost", "globe", "haste", "ivory", "jewel", "kevin", "laser", "mango", "night", "olive", "pearl", "quilt", "river", "stone", "tiger", "ultra", "vowel", "waste", "xylan", "youth", "zesty"];

const ans = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];

let count = 0

const numberWords = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
    21: 'twenty-one', 22: 'twenty-two', 23: 'twenty-three', 24: 'twenty-four', 25: 'twenty-five'
};

function changeColor(numalpha, num){
    if (document.getElementById(numalpha).value == ans[num-1]) {
        const element = document.getElementById(numalpha);
        element.style.backgroundColor = 'green';
        return 1;
    } else if (ans.includes(document.getElementById(numalpha).value)) {
        const element = document.getElementById(numalpha);
        element.style.backgroundColor = 'yellow';
        return 0;
    } else {
        const element = document.getElementById(numalpha);
        element.style.backgroundColor = 'red';
        return 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form');
    
    form.addEventListener('submit', (event) => {

        event.preventDefault();
        count = count + 1

        if (count == 1) {
            score = 0
            for (let i=1; i<=5; i++) {
                score = score + changeColor(numberWords[i], i)
            }
            if (score==5) {
                const element = document.getElementById('result');
                element.innerHTML = "Congrats, you've solved it!";
                element.style.color = 'green';
            }
        } else if (count == 2) {
            score = 0
            for (let i=6; i<=10; i++) {
                score = score + changeColor(numberWords[i], i-5)
            }
            if (score==5) {
                const element = document.getElementById('result');
                element.innerHTML = "Congrats, you've solved it!";
                element.style.color = 'green';
            }
        } else if (count == 3) {
            score = 0
            for (let i=11; i<=15; i++) {
                score = score + changeColor(numberWords[i], i-10)
            }
            if (score==5) {
                const element = document.getElementById('result');
                element.innerHTML = "Congrats, you've solved it!";
                element.style.color = 'green';
            }
        } else if (count == 4) {
            score = 0
            for (let i=16; i<=20; i++) {
                score = score + changeColor(numberWords[i], i-15)
            }
            if (score==5) {
                const element = document.getElementById('result');
                element.innerHTML = "Congrats, you've solved it!";
                element.style.color = 'green';
            }
        } else if (count == 5) {
            score = 0
            for (let i=21; i<=25; i++) {
                score = score + changeColor(numberWords[i], i-20)
            }
            if (score==5) {
                const element = document.getElementById('result');
                element.innerHTML = "Congrats, you've solved it!";
                element.style.color = 'green';
            } else {
                const element = document.getElementById('result');
                element.innerHTML = "The word was "+ans+". Better luck next time :(";
                element.style.color = 'red';
            }
        } 
    });
});