const express = require('express');
const cors = require('cors');
const secureServer = require('./secureserver');
const app = secureServer.app;
const path = require('path');

// Add this route before starting the server
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

secureServer.start();
