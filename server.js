
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

console.log('--- SERVER STARTING ---');
console.log('Current directory:', __dirname);
console.log('Checking for dist/index.html:', fs.existsSync(path.join(__dirname, 'dist', 'index.html')));

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Health check
app.get('/health', (req, res) => {
    res.send('TX Studio Server is Running');
});

// Serve the index.html for any SPA routes
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('Application not built. Please run npm run build.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
