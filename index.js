const express = require('express');
const axios = require('axios');
// const cors = require('cors'); // Import the CORS middleware
const app = express();
const PORT = process.env.PORT || 5000;

// Use the CORS middleware
// app.use(cors());

// Define a route to proxy the website
app.get('/api/proxy-website', async (req, res) => {
    try {
        const response = await axios.get('https://www.tatamotors.com/');
        res.send(response.data); // Send the fetched website content back to the client
    } catch (error) {
        console.error('Error fetching website content:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
