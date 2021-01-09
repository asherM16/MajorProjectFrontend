const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const mailer = require('./mailer')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/api/contact', (req, res) => {
    const { email = '', name = '', courseClass = '', address = '', contact = '' } = req.body
    // const text = `name: ${name} email: ${email} course: ${courseClass} address: ${address} contact: ${contact}`
    mailer({ email, name, contact, address, courseClass }).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('bad')
    })
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.get('/test', (req, res) => {
    res.send('success')
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})
