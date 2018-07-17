const express = require('express');
const router = express.Router();
const Menu = require('../models/menuMdl');
const config = require('../config/database');

router.get('/menu', function (req, res) {
    Menu.find({}, function (err, menus) {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, data: menus });
        }
    }).sort({ OrderBy: 1 });
});

router.post('/menu', function (req, res) {
    let menuObj = new Menu(req.body);
    menuObj.DateAdded = new Date();
    menuObj.DateUpdated = new Date();
    menuObj.save(function (err) {
        if (err) {
            res.json({ success: false, msg: err });
            return;
        } else {
            res.json({ success: true, msg: "Successfully added the menu!" });
        }
    });
});

router.put('/menu',function (req, res) {
    let menuObj = new Menu(req.body);
    menuObj.DateUpdated = new Date();

    let query = { _id: req.body._id }

    Menu.update(query, menuObj, function (err) {
        if (err) {
            res.json({ success: false, msg: err });
            return;
        } else {
            res.json({ success: true, msg: "Successfully updated the menu!" });
        }
    });
});

router.delete('/menu/:id', function (req, res) {
    let query = { _id: req.params.id }
    Menu.findById(req.params.id, function (err) {
        Menu.remove(query, function (err) {
            if (err) {
                res.json({ success: false, msg: err });
                return;
            } else {
                res.json({ success: true, msg: "Successfully deleted the menu!" });
            }
        });
    });
});

module.exports = router;
