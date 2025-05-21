const express = require('express');
const path = require('path');
const app = express();

// Serve static Angular files
app.use(express.static(path.join(__dirname, '../../frontend/dist/frontend/browser')));

// Redirect all routes to Angular index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/frontend/browser/index.html'));
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway server running on http://localhost:${PORT}`);
});
