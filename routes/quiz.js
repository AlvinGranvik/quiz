import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz"
    })
})

router.get("/questions", (req,res) => {
    const questions = [
        {
            id: 1,
            text: "How for to the make fentanyl?",
            answers: ["40 lbs pure saffran", "50 burger", "idk", "5"],
            correctAnswer: "5"
        },
    
        {
            id: 2,
            text: "how for burgrer??",
            answers: ["bob burger", "100 lettuce", "family guys"],
            correctAnswer: "bob burger"
        }
    ]
})

router.post("/questions", (req, res) => {
    const answers = req.body
    console.log(answers)
    questions.forEach(questions => {
        const answer = answers(question.id)
        if (answer == questions.correctAnswer) {
            console.log("Du har svarat rätt på fråga: ", question.id)
        }
    })
    res.render("questions.njk", {
        message: "Frågor",
        questions
    })
})



export default router