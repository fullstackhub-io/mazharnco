
const emailer = require('../shared/email');

const Contact = module.exports;

module.exports.sendContactEmail = function (name, email , message,callback) {
  let msgplain =  name + ' has sent you a message '+ email +'-'+ message;
  let msghtml =  name + ' has sent you a message <br>'+'Email Address: '+email+'<br><br>Message: '+ message;
  emailer.sendEmail(process.env.FROM_EMAIL,'', 'New Message Received from Mazhar & Co.', msgplain, msghtml,callback);
}