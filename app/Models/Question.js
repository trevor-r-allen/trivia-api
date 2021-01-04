export default class Question {
  constructor({category, question, answers}) {
    this.category = category
    this.question = question
    this.answers = answers
  }
  
  get Template (){
    return `
    
    `
  }
}