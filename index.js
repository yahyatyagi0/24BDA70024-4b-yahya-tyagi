import express from 'express'
import cors from 'cors'
import cardsRouter from './routes/card.routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the card collection API' })
})

app.use('/cards', cardsRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
