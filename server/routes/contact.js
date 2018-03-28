const express = require('express');
const router = express.Router();
const Contact = require('../models/contactMdl');

router.post('/contact', function (req, res) {
  Contact.sendContactEmail(req.body.Name, req.body.EmailAddress, req.body.Message,
    function (error, info) {
      if (error) {
        res.json({ success: false, msg: error });
      } else {
        res.json({ success: true, msg: "Thank you for contacting, we will get to you back soon!" });
      }
    }
  );
});

module.exports = router;
