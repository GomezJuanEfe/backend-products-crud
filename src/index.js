require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {
  handleCreateData,
  handleReadData,
  handleReadDataById,
  handleUpdateData,
  handleDeleteData
} = require('./controller');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// Create - POST
app.post('/product', handleCreateData);

// Read - GET
app.get('/products', handleReadData);

// Read - GET:id
app.get('/product/:id', handleReadDataById);

// Update - PUT
app.put('/product/:id', handleUpdateData);

// Delete - DELETE
app.delete('/product/:id', handleDeleteData);

app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});