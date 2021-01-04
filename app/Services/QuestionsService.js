import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { trivia } from "./AxiosService.js"

class QuestionsService {
  async getQuestions(){
    let response = await trivia.get()
    console.log(response)
    ProxyState.questions = response.data.results.map(q => new Question(q))
  }
}

export const questionsService = new QuestionsService