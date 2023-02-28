const express = require('express');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('This Works!')
});

module.exports = router;