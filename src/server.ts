import dotenv from 'dotenv'
import express from 'express'
import { connectDatabase, getSavedChords } from './utils/database'

const app = express()
const port = process.env.PORT || 3001
dotenv.config()

app.use(express.json())

app.get('/api/savedchords', async (_request, response) => {
  console.log('it worked!')
  const allSavedChords = await getSavedChords().find().toArray()
  response.status(200).send(allSavedChords)
})

app.post('/api/savedchords', async (request, response) => {
  const newChord = request.body
  await getSavedChords().insertOne(newChord)
  response.status(200).send('chord sent')
})

app.delete('/api/savedchords', async (request, response) => {
  const { id } = request.body
  await getSavedChords().deleteOne({ id })
  response.status(200).send('chord deleted')
})

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' })
})
app.use('/storybook', express.static('dist/storybook'))

app.use(express.static('dist/app'))

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' })
})

connectDatabase(process.env.MONGODB_URI || '').then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
  })
})
