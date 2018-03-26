const nodemailer = require('nodemailer');

module.exports.sendEmail = function (to, bcc = "", subj, msg, html, callback) {
    var transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_EMAIL_PW
        }
    });

    var mailOptions = {
        from: '"Mazhar & Co. "<"'+process.env.FROM_EMAIL+'">',
        to: to,
        bcc: bcc,
        subject: subj,
        text: msg,
        html: html
    };

    return transporter.sendMail(mailOptions, callback);
}

