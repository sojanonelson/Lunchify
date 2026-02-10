const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
// const menuRoutes = require('./routes/menu.routes')
// const orderRoutes = require('./routes/order.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
// app.use('/menu', menuRoutes)
// app.use('/order', orderRoutes)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

module.exports = app
