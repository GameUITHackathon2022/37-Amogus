import express from 'express'
import initWebRoutes from './route/web'
import { json, urlencoded } from 'body-parser'
import postRoute from './resources/post/post.route'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'
import { connect } from './utils/db'

export const app = express()
const port = process.env.PORT || 3333

app.use(cors({ origin: true }))
app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: true }))
initWebRoutes(app)

app.use('/api/post', postRoute)

export const start = async () => {
  try {
    await connect()
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
