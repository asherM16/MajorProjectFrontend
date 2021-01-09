const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashertoufeeq23@gmail.com',
    pass: 'welldone@23'
  }
})

const send = (text, subject, reciever) => {
  const message = {
    from: 'ashertoufeeq23@gmail.com',
    to: reciever,
    subject: subject,
    text: text,
    replyTo: 'ashertoufeeq@gmail.com'
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send
