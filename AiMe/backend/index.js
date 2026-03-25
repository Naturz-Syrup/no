'use strict';

const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Base44 API routes for content items
app.get('/api/content', (req, res) => {
    res.json({ message: 'Content items retrieved successfully.' });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});