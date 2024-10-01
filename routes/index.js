import express from "express"

const router = express.Router()

router.get("/test", (req, res) =>{
    res.send("Hello World!")
});

router.get('/', (req, res) => {

    console.log(req.query)
    const name = req.query.name
    res.render("index.njk", {
      title: "Hello World!",
      message: `Tjena ${name}`,
    })
})

router.get(`/ytub`, (req, res) => {
    const ID = req.query.v
    console.log(ID)
    res.render(`ytub.njk`, {
      title: `Youtube`,
      youtubeID: ID,
    })
})

router.get("/readme", (req, res) => {
    console.log(req)
    res.json( { 
      message: "Hello World!",
    })
})

router.get('/om', (req, res) => {
    res.render("om.njk", {
      message: "Omsidan",
      title: "Om",
    })
})
  
router.get('/watch', (req, res) => {
    /*const movieID = req.query.v
    console.log(movieID)
    const movies = {
      "baba": {
        title: "The shawshank redemption",
        year: 1995
      }
    }*/
})
  


export default router

