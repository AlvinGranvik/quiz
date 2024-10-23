import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz"
    })
})

const questions = [
  {
    id: "q1",
    text: "How baba in the naba???",
    answers: [3, 12, 5, 4],
    correctAnswer: 4
  },
  {
    id: "q2",
    text: "How for to burger",
    answers: ["eat the bruger", "egg five times", "im feelin like bars from mars", "mars bar"],
    correctAnswer: "egg five times",
  }
]

router.get("/questions", (req, res) => {
  res.render("questions.njk", {
    message: "Frågor",
    questions
  })
})

router.post("/end", (req, res) => {
  const answers = req.body
  console.log({answers})
  const results = questions.map(question => {
    const answer = answers[question.id]
    return {
      question: question.text,
      answer,
      correct: answer == question.correctAnswer
    }
  })

  res.render("result.njk", {
    message: "Ditt resultat",
    results
  })
})
// rad 4 , 18, 19 i server.js

export default router

// kom ihåg i server.js
// import quizRouter from './routes/quiz.js'
// app.use("/quiz", quizRouter)