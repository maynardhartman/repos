// JavaScript source code
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/posts')
    .get(function (req, res) {
        res.send({ message: 'TODO: send all messages' });
    })
    .post(function (req, res) {
        res.send({ message: 'TODO: create a new post' });   
    });

router.route('/posts/:id');

module.exports = router;
