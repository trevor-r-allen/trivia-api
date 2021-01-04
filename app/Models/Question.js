export default class Question {
  constructor({category, question, correct_answer, incorrect_answers}) {
    this.category = category
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers
    this.answers = incorrect_answers
    this.answers.splice(Math.floor(Math.random() * 3), 0, this.correctAnswer)
  }
  
  get Template (){
    return /*html*/`
    <li><p><h5>${this.question}</h5><h6>Category: ${this.category}</h6> Answers: <ul><li>${this.answers[0]}</li><li>${this.answers[1]}</li><li>${this.answers[2]}</li><li>${this.answers[3]}</li></ul><h6>Correct Answer: <span>${this.correctAnswer}</span></h6></p>
    </li>
    `
  }
}