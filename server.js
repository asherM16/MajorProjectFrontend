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
    const text = `Name : ${name} Class : ${courseClass} Contact Number : ${contact} Email : ${email} Address : ${address}`
    const subject = `Request for demo ${courseClass}  from ${name}`
    mailer(text, subject, 'ashertoufeeq@gmail.com').then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('bad')
    })
  })
  server.post('/api/callback', (req, res) => {
    const { contact = '' } = req.body
    const text = `Contact Number : ${contact}`
    const subject = 'Request for Callback'
    mailer(text, subject, 'ashertoufeeq@gmail.com').then(() => {
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
