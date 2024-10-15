import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("calc.njk", {title: "Kalkylator banger wow"})
})

router.get("/add", (req,res) => {
    const {num1, num2} = req.query
    const sum = Number(num1) + Number(num2)
    res.send(`Summan av $(num1) och $(num2) är $(sum)`)
})

export default router