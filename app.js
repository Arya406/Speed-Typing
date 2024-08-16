window.addEventListener('load',init)

let time = 5;
let score = 0 ;
let isPlaying;


const wordInput =  document.querySelector('#word-input');
const currentWord =  document.querySelector('#current-word');
const scoreDisplay =  document.querySelector('#score');
const timeDisplay =  document.querySelector('#time');
const messsage =  document.querySelector('#message');
const seconds =  document.querySelector('#seconds');

const word = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'bulletin',
    'reflection',
    'calculator',
    'brother',
]

function init(){
    showWord(word);
     wordInput.addEventListener('input',startMatch)
setInterval(countdown,1000);
setInterval(checkstatus,50);
}

function startMatch(){
    if(matchWords()){
        console.log("MATCH !!!")
        isPlaying= true;
        time = 6;
        showWord(word);
        wordInput.value = '';
        score++; 
    }

    if(score === -1){
        scoreDisplay.innerHTML= 0;

    }else{
        scoreDisplay.innerHTML=score;
    }
    

} 
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        messsage.innerHTML= ' correct !!';
        return true;

    } else {
        messsage.innerHTML='';
        return false;
    }
}

function showWord(words){
    const randomIndex = Math.floor(Math.random() * word.length);
    currentWord.innerHTML=word[randomIndex]
}

function countdown(){
    if(time > 0 ){
        time--
    }else if(time==0) {
        isPlaying=false
    }
    timeDisplay.innerHTML=time;


} 
function checkstatus(){
    if(!isPlaying && time==0){
        messsage.innerHTML="game over!!";
        score = -1;
    }

}












