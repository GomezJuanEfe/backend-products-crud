const {
  createData,
  readData,
  readDataById,
  updateData,
  deleteData
} = require('./model');

// Healthcheck
const handleHealthcheck = (req, res) => {
  try {
    res.status(200).send('<h2>Ok</h2>');
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Create - POST
 const handleCreateData = (req, res) => {
  try {
    const { body } = req;
    const response = createData(body)

    res.status(201).json({ message: 'Product created successfully!', data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Read - GET
const handleReadData = (req, res) => {
  try {
    const response = readData();

    res.status(201).json({ message: 'Products found successfully', data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Read - GET:id
const handleReadDataById = (req, res) => {
  try {
    const { id } = req.params;
    const response = readDataById(id);

    if (Object.keys(response).length === 0) throw new Error(`The id (${id}) doesn't exist :(`);

    res.status(200).json({ message: `Product ${id} found successfully`, data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update - PUT
const handleUpdateData = (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const response = updateData(id, body);

    res.status(200).json({ message: 'Product updated successfully!', data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete - DELETE
const handleDeleteData = (req, res) => {
  try {
    const { id } = req.params;
    const response = deleteData(id);

    res.status(200).json({ message: `Product ${id} was deleted successfully`, data: response })
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  handleHealthcheck,
  handleCreateData,
  handleReadData,
  handleReadDataById,
  handleUpdateData,
  handleDeleteData
}