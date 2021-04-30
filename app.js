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
// console.log(questions)

const startGame = document.querySelector('.start-game')
// console.log(startGame)
const startOver = document.querySelector('.start-over')
// console.log(startOver)r
const submit = document.querySelector('.submit')
// console.log(submit)
const previous = document.querySelector('.previous')

const next = document.querySelector('.next')
// console.log(next)
const questionText = document.querySelector('.question-text')
// console.log(questionText)
const results = document.querySelector('.results')
// console.log(results)
const answerText = document.querySelector('.answer-text')
// console.log(answerText)
const resultsMessage = document.querySelector('.results-message')
// console.log(resultsMessage)
const answerForm = document.querySelector('.answer-form')
// console.log(answerForm)

let index = 0

startGame.addEventListener('click', function () {
    index = 0
    questionText.innerText = questions[index].question
    next.style.display = 'inline-block'
    previous.style.display = 'inline-block'
})

startOver.addEventListener('click', function () {
    questionText.innerText = ''
    results.innerText = ''
})

next.addEventListener('click', function (event) {
    if (index <4) {
        index++
    }
    questionText.innerText = questions[index].question
    results.innerText = ''
    resultsMessage.innerText = ''
})

previous.addEventListener('click', function () {
    if (index > 0){
        index--
    }
    questionText.innerText = questions[index].question
    results.innerText = ''
    resultsMessage.innerText = ''
})

answerForm.addEventListener('submit', function (event) {
    event.preventDefault()
    results.innerText = questions[index].answer
    if (answerText.value.toLowerCase() == questions[index].answer) {
        resultsMessage.innerText = "Aye! You're ON POINTE!"
    } else {
        resultsMessage.innerText = "Not quite on pointe!"
    }
    answerText.value = ''
})