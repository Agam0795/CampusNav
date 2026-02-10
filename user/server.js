// Simple Node.js + Express backend for MongoDB cloud storage
// To use this:
// 1. Install dependencies: npm install express mongodb cors
// 2. Update MONGODB_URI below with your connection string
// 3. Run: node server.js
// 4. Update BACKEND_API_URL in script.js to http://localhost:3000

const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = 3000;

// MongoDB Configuration
const MONGODB_URI = "mongodb+srv://agam16042006_db_user:agamsingh@cluster0.axzokiy.mongodb.net/?appName=Cluster0";
const DB_NAME = "navigation_db";

let db;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
MongoClient.connect(MONGODB_URI)
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(DB_NAME);
    })
    .catch(error => console.error('MongoDB connection error:', error));

// API Routes

// Save destination
app.post('/api/destinations', async (req, res) => {
    try {
        const result = await db.collection('destinations').insertOne(req.body);
        res.json({ success: true, insertedId: result.insertedId });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get all destinations
app.get('/api/destinations', async (req, res) => {
    try {
        const destinations = await db.collection('destinations').find({}).toArray();
        res.json({ success: true, data: destinations });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete destination
app.delete('/api/destinations/:id', async (req, res) => {
    try {
        const result = await db.collection('destinations').deleteOne({ 
            _id: new ObjectId(req.params.id) 
        });
        res.json({ success: true, deletedCount: result.deletedCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Save grid state
app.post('/api/grid', async (req, res) => {
    try {
        const gridData = { ...req.body, timestamp: new Date() };
        const result = await db.collection('grid_states').insertOne(gridData);
        res.json({ success: true, insertedId: result.insertedId });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get latest grid state
app.get('/api/grid/latest', async (req, res) => {
    try {
        const gridState = await db.collection('grid_states')
            .find({})
            .sort({ timestamp: -1 })
            .limit(1)
            .toArray();
        res.json({ success: true, data: gridState[0] || null });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('API Endpoints:');
    console.log('- POST   /api/destinations     - Save destination');
    console.log('- GET    /api/destinations     - Get all destinations');
    console.log('- DELETE /api/destinations/:id - Delete destination');
    console.log('- POST   /api/grid             - Save grid state');
    console.log('- GET    /api/grid/latest      - Get latest grid state');
});
