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
    message: "wsg guys",
    title: "nunjucks hello world!",
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