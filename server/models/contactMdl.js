const mongoose = require('mongoose');
const emailer = require('../shared/email');
// Contact Schema

const ContactSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  EmailAddress: {
    type: String,
    required: true
  },
  Message: {
    type: String,
    required: true
  }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);


module.exports.sendContactEmail = function (name, email, message, callback) {
  let msgplain = name + ' has sent you a message ' + email + '-' + message;
  let msghtml = name + ' has sent you a message <br>' + 'Email Address: ' + email + '<br><br>Message: ' + message;
  emailer.sendEmail(process.env.FROM_EMAIL, '', 'New Message Received from Mazhar & Co.', msgplain, msghtml, callback);
}