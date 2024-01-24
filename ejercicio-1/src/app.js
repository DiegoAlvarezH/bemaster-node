// imports
const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/api', routes);

// Initializing the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
