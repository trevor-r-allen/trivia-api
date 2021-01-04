import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";


function _drawQuestions(){
  let template = '<ol>'
  const questions = ProxyState.questions
  console.log(questions)
  questions.forEach(q => template += q.Template)
  document.getElementById('questions').innerHTML = template + '</ol>'
}

export default class QuestionsController {
  constructor(){
    ProxyState.on('questions', _drawQuestions)

    questionsService.getQuestions()
  }

  
}