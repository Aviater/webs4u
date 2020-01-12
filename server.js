const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

// Middleware and Cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);

app.post('/api/form', (req, res) => {
  
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;

  // Email Styling
  const htmlEmail = `
    <h3>Contact Details</h3>
    <ul style="list-style:none">
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `

  // Mail Authentication
  var transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  })

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  })

  var mail = {
    from: email,
    to: process.env.MY_MAIL,
    subject:`Message From ${name} Through Ecficio Contact Form`,
    text: message,
    html: htmlEmail
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      console.log('Message sent!');
    }
  })
})

// THIS NEEDS TO BE THE LAST FUNCTION IN THE FILE
if(process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static(path.resolve(__dirname, './client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port + '...'));

/* Start server with:

npm run dev start

Will open the Express server on port 5000 and React server on port 8080 */