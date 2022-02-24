import express from 'express'

const router = express.Router()

router.get('/test', (req, res) => {
  res.send('get test route')
})

router.post('/test', (req, res) => {
  res.send('post test route')
})

export default router
