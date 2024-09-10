import express from "express"
import nunjucks from "nunjucks"
const app = express()
nunjucks.configure("views", {
  autoescape: true,
  express: app,
})
app.use(express.static("public"))
app.get('/', (req, res) => {
  res.render("index.njk", {
    message: "Hemsidan med nunjucks!",
    title: "hem",
    items: ["A", "B", "C", "D"],
  })
})

app.get("/readme", (req, res) => {
  console.log(req)
  res.json( { 
    message: "Hello World!",
  })
})

app.get('/om', (req, res) => {
  res.render("om.njk", {
    message: "Omsidan",
    title: "Om",
  })
})

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`)
})