import express from "express"
import nunjucks from "nunjucks"
const app = express()
nunjucks.configure("views", {
  autoescape: true,
  express: app,
})
app.use(express.static("public"))
app.get('/', (req, res) => {

  console.log(req.query)
  const name = req.query.name
  res.render("index.njk", {


    title: "Hello World!",
    message: `Tjena ${name}`,
  })
})

app.get('/watch', (req, res) => {
  /*const movieID = req.query.v
  console.log(movieID)
  const movies = {
    "baba": {
      title: "The shawshank redemption",
      year: 1995
    }
  }*/
})


app.get(`/ytub`, (req, res) => {
  const ID = req.query.v
  console.log(ID)
  res.render(`ytub.njk`, {
    title: `Youtube`,
    youtubeID: ID,
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