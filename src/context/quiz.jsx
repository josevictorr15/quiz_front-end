import { createContext, useReducer } from "react";
import questions from "../data/questions_complete.js";

const stages = ["Start", "Category", "Playing" , "End"];

const initialState = {
    gameStage: stages[0],
    questions,
    currentQuestions: 0,
    score: 0,
    answerSelected: false,
    help: false,
    just: false
}

const quizReducer = (state, action) => {

    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: stages[1]
            }
        case "START_GAME":
                let quizQuestions = null

                state.questions.forEach((question) => {
                    if(question.category === action.payload) {
                        quizQuestions = question.questions
                    }
                })

                return {
                    ...state,
                    questions: quizQuestions,
                    gameStage: stages[2]
                }

        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                questions: reorderedQuestions
            }
        case "CHANGE_QUESTIONS": 
            const nextQuestion = state.currentQuestions + 1
            let endGame = false

            if(!state.questions[nextQuestion]) {
                endGame = true
            }

            return {
                ...state,
                currentQuestions: nextQuestion,
                gameStage: endGame ? stages[3] : state.gameStage,
                answerSelected: false,
                help: false
            }
        case "NEW_GAME":
            return initialState

        case "CHECK_ANSWER":
            if (state.answerSelected) return state
            
            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if(answer === option) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option
            }

        case "SHOW_TIP":
            return {
                ...state,
                help: "tip"
            }

        case "SHOW_JUSTIFY":
            return {
                ...state,
                just: "justify"
            }
            
        default:
            return state
        
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState)
    
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}