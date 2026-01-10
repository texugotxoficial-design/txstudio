
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('--- SERVER STARTING (CJS) ---');
console.log('Current directory:', __dirname);

const distPath = path.join(__dirname, 'dist');
const rootPath = __dirname;

// Serve static files from dist first, then root
app.use(express.static(distPath));
app.use(express.static(rootPath));

// Health check
app.get('/health', (req, res) => {
    res.send('TX Studio Server is Running (CJS)');
});

// Serve the index.html for any SPA routes
app.get('*', (req, res) => {
    // Try dist/index.html first
    const distIndex = path.join(distPath, 'index.html');
    if (fs.existsSync(distIndex)) {
        return res.sendFile(distIndex);
    }

    // Fallback to root index.html if dist doesn't exist (e.g. built to root)
    const rootIndex = path.join(rootPath, 'index.html');
    if (fs.existsSync(rootIndex)) {
        return res.sendFile(rootIndex);
    }

    res.status(404).send('Application not built. Please run npm run build.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
