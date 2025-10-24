import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Backend Online ✅',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`)
})
