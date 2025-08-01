const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Azure Container App is running successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
