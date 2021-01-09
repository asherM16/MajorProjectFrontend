const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashertoufeeq23@gmail.com',
    pass: 'welldone@23'
  }
})

const send = ({ email, name, contact, address, courseClass }) => {
  const message = {
    from: 'ashertoufeeq23@gmail.com',
    to: 'ashertoufeeq@gmail.com',
    subject: `Request for demo ${courseClass}  from ${name}`,
    text: `Name : ${name} \n Class : ${courseClass}\n Contact Number : ${contact}\n Email : ${email}\n Address : ${address} `,
    replyTo: 'ashertoufeeq@gmail.com'
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send
