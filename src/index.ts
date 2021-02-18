require('dotenv').config()
import express from 'express'
const app = express()

import indexRoutes from './routes/index.routes'

app.set('port', process.env.PORT || 5555)

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', indexRoutes)

app.listen(app.get('port'), () =>
	console.log(`App corriendo en el puerto ${app.get('port')}`),
)
