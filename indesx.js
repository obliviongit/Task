// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
const submissionRoutes = require('./routes/submissionRoutes');
app.use('/api/submissions', submissionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
