const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Contact = require('../models/contactMdl');

router.post('/contact', function (req, res) {
  
    let cntctObj = new Contact(req.body);
    cntctObj.DateAdded = new Date();
    cntctObj.DateUpdated = new Date();
    cntctObj.save(function (err) {
      if (err) {
        res.json({ success: false, msg: "There is some error in sending message!" });
        return;
      } else {
        Contact.sendContactEmail(req.body.Name, req.body.EmailAddress, req.body.Message,
          function (error, info) {
            if (error) {
              res.json({ success: false, msg: error });
            } else {
              res.json({ success: true, msg: "Thank you for contacting, we will get to you back soon!" });
            }
          }
        );
      }
    });
  });

module.exports = router;
