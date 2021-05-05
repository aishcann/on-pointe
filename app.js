const questions = [
    {question: 'What is the meaning of plie?',
    answer: 'to bend'},
    {question: 'Tendu means to ....?',
    answer: 'stretch'},
    {question: 'True or false: we do not turn out in ballet',
    answer: 'false'},
    {question: 'What is the meaning of pas de chat?',
    answer: 'step of the cat'},
    {question: 'Arriere is to front, as derriere is to ...',
    answer: 'back'},
]

const startGame = document.querySelector('.start-game')
const startOver = document.querySelector('.start-over')
const submit = document.querySelector('.submit')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const questionText = document.querySelector('.question-text')
const results = document.querySelector('.results')
const answerText = document.querySelector('.answer-text')
const resultsMessage = document.querySelector('.results-message')
const answerForm = document.querySelector('.answer-form')
const gameDiv = document.querySelector('.game')
const startPage = document.querySelector('.start-page')
const progressBar = document.querySelector('.progress-bar')
let progressStatus = document.querySelector('.progress-status')
const finalScore = document.querySelector('.final-score')
const endPage = document.querySelector('.end-page')
const displayScore = document.querySelector('.display-score')
const endMessage = document.querySelector('.end-message')
const restartGame = document.querySelector('.restart')

let index = 0
let progressStatusWidth = 20
let triviaScore = 0

startGame.addEventListener('click', function () {
    index = 0
    questionText.innerText = questions[index].question
    gameDiv.style.display = 'inline-block'
    startPage.style.display = 'none'
    progressBar.style.display ='inline-block'
    progressStatus.innerText = `${index+1}/5`
})

startOver.addEventListener('click', function () {
    index = 0
    questionText.innerText = questions[index].question
    results.innerText = ''
    resultsMessage.innerText = ''
    progressBar.style.display ='inline-block'
    progressStatusWidth =20
    progressStatus.style.width = `${progressStatusWidth}%`
    progressStatus.innerText = `${index+1}/5`
})

next.addEventListener('click', function (event) {
    if (index <4) {
        index++
        progressStatusWidth += 20
        progressStatus.style.width = `${progressStatusWidth}%`
        progressStatus.innerText = `${index+1}/5`
    }
    questionText.innerText = questions[index].question
    answerText.value = ''
    results.innerText = ''
    resultsMessage.innerText = ''
})

previous.addEventListener('click', function () {
    if (index > 0){
        index--
        progressStatusWidth -= 20
        progressStatus.style.width = `${progressStatusWidth}%`
        progressStatus.innerText = `${index+1}/5`
    }
    questionText.innerText = questions[index].question
    answerText.value = ''
    results.innerText = ''
    resultsMessage.innerText = ''
})

answerForm.addEventListener('submit', function (event) {
    event.preventDefault()
    results.innerText = questions[index].answer
    if (answerText.value.toLowerCase() == questions[index].answer) {
        resultsMessage.innerText = "Aye! You're on pointe!"
        resultsMessage.style.visibility = 'visible'
        resultsMessage.style.opacity = 1
        setTimeout(() => {
            resultsMessage.style.visibility = "hidden"
            resultsMessage.style.opacity = 0
        }, 2000)
        triviaScore += 20
    } else {
        resultsMessage.innerText = "Not quite on pointe!"
        resultsMessage.style.visibility = "visible"
        resultsMessage.style.opacity = 1
        setTimeout(() => {
            resultsMessage.style.visibility = "hidden"
            resultsMessage.style.opacity = 0
        }, 2000)
    }
    answerText.value = ''
    
    if (index===4){
        finalScore.style.display = 'inline-block'
    }
})

finalScore.addEventListener('click', function () {
    gameDiv.style.display = 'none'
    endPage.style.display ='inline-block'
    displayScore.innerText = `${triviaScore}%`
    if (triviaScore <= 60) {
        endMessage.innerText = 'Looks like your skills need a bit more work'
    } else if (60 < triviaScore <= 80) {
        endMessage.innerText = "You're almost there!"
    } else if (80 < triviaScore <= 100) {
        endMessage.innerText =  "Misty Copeland, anyone? You are definitely on pointe!"
    }
})

restartGame.addEventListener('click', function () {
    index = 0
    triviaScore = 0
    endPage.style.display = 'none'
    finalScore.style.display ='none'
    gameDiv.style.display = 'inline-block'
    questionText.innerText = questions[index].question
    results.innerText = ''
    resultsMessage.innerText = ''
    progressBar.style.display ='inline-block'
    progressStatusWidth =20
    progressStatus.style.width = `${progressStatusWidth}%`
    progressStatus.innerText = `${index+1}/5`
})