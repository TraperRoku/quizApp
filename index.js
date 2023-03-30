const quizData = [
{
    question:"Łysy Bóg kto to ?",
    a:"Twoj stary",
    b:"Twoja stara",
    c:"Ty w przyszłości",
    d:"Pikers",
    correct:'d'
}, {
    question:"Raper którego bedę słuchał jak co roku przy koszeniu trawy ?",
    a:"Młody West",
    b:"Pro8l3em",
    c:"Sentino",
    d:"Vkie",
    correct:"a"


},{
    question:"Kogo płytke najprędzej bym kupił ?",
    a:"Kartkiego",
    b:"Pro8l3ema",
    c:"Sentino",
    d:"Pikersa",
    correct:"b"
},{
    question:"Kto jest najwieksza chujozą garbatą w polskim rapie?",
    a:"Ahmed z afganistanu",
    b:"Malik Smietana",
    c:"Właściciel gm2l",
    d:"Były kolega Sentino",
    correct:"b"
},{
    question:"O kim mowa, ,,Chłopaki Która Godzina ????'' ",
    a:"Błażej Sikorski",
    b:"Gadżet jadący rowerem na chate",
    c:"Jakub Zacharski zjarany jak musi wracać na chate",
    d:"Rolnik z rana",
    correct:"a"
},{

    question:"Kto jest najgorzą kurwa ?",
    a:"Błażej Sikorski",
    b:"Rząd USA",
    c:"Ukraina",
    d:"PUTIN/ROSJA",
    correct:'b'

},{

question:"Kto jest idolem Rolnika?",
a:"Błażej Sikorski",
b:"Gadżet oglądajacy anime",
c:"Andrzej Tata",
d:"Jan Paweł ||",
correct:'c'

}


];

const quiz = document.getElementById("quiz") ;
const answerEls = document.querySelectorAll(".answer") ;
const questionEL = document.getElementById("Question");
const a_textEL = document.getElementById("a_text");
const b_textEL = document.getElementById("b_text");
const c_textEL = document.getElementById("c_text");
const d_textEL = document.getElementById("d_text");
const przycisk = document.getElementById("potwierdz")

let currentQuiz = 0;

let wynik = 0;



loadQuiz();

function loadQuiz(){
    odtegowanieKropki();

const currentQuestion =quizData[currentQuiz];

    questionEL.innerText = currentQuestion.question;
    a_textEL.innerText=currentQuestion.a;
    b_textEL.innerText=currentQuestion.b;
    c_textEL.innerText=currentQuestion.c;
    d_textEL.innerText=currentQuestion.d;


}

function getSelected(){
    

    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           
            answer = answerEl.id;
        }

    
});
return answer ;

}

function odtegowanieKropki(){

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    
});

}


przycisk.addEventListener('click', () => {

const answer = getSelected();

console.log(answer)

    if(answer)
    {
        if(answer ===quizData[currentQuiz].correct){
            wynik+=1;
        }

        currentQuiz++;

        if(currentQuiz<quizData.length){
            loadQuiz(); 
        
        }else{
            quiz.innerHTML = `<h2>Twój wynik ${wynik}/${quizData.length}</h2>
            <button onclick="location.reload()">Resecik</button>`;
        }
    }
   

    

});