const todos = [];

const getAll = (req, res) => {
  res.send("Get all  the list ");
};

const addNew = (req, res) => {
  res.send("New Item has been added ");
};

const updateItemById = (req, res) => {
  res.send("the item has been updated ");
};

const deleteItemById = (req, res) => {
  res.send("the item has been deleted");
};

module.exports = { getAll, addNew, updateItemById, deleteItemById };
