import express, { static } from 'express';
let app = express();
import { join } from 'path';
import { createTransport } from 'nodemailer';

// Static folder
app.use('/public', static(join(__dirname, 'public')));

createTransport({
  host: "mail.YOURDOMAIN.com", 
    port: 587,
    secure: false,
  auth: {
    user: "YOURUSERNAME",
    pass: "YOURPASSWORD" 
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


router.post('/access', (req, res, next) => {
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: name,
    message: subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))