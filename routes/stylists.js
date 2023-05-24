const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/angela', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stylists/angela.html'));
});

router.get('/becki', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stylists/becki.html'));
});

router.get('/misty', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stylists/misty.html'));
});

router.get('/teresa', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stylists/teresa.html'));
});

module.exports = router;