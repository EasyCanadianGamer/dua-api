const express = require('express');
const app = express();
const duasRouter = require('./routes/dua');
const api = "/api"
// Serve a simple HTML page at the root route
app.get(`${api}`, (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server Running</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>API is running at http://localhost:3000/api 🚀</h1>
      </body>
      </html>
    `);
  });
// Use the duas router

app.use(`${api}/duas`, duasRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}${api}`);
});