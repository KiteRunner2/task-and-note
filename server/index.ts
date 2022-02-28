import express from 'express'
import { PORT, BUILD_PATH, ENV } from './config/index'
import testRoute from './routes'
import { connectDb } from './db'

const app = express()

app.use(express.static(BUILD_PATH!))
app.use(express.json())

app.use('/api/v1', testRoute)

app.get('*', (req, res) => {
  return res.sendFile(`${BUILD_PATH}/index.html`)
})

connectDb()

app.listen(PORT, () => {
  console.log(`server started on port ${PORT} in ${ENV} mode`)
})
