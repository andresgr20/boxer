const paginationService = require("../services/paginationService");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "..", "orders.json");

const createId = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letters = Array.from(3, () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  });
  const numeric = Math.floor(Math.random() * (999 + 1));
  const paddedNumber = numeric.toString().padStart(3, "0");
  return letters.join("") + paddedNumber;
};

const readDataFromJson = () => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const writeDataToJson = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
};

const getOrder = (req, res) => {
  const { page = 1, perPage = 10 } = req.query;

  let filteredData = data;
  if (filterBy && filterValue) {
    filteredData = data.filter((item) => item[filterBy] === filterValue);
  }

  const paginatedData = paginationService.paginate(filteredData, page, perPage);

  res.json({
    data: paginatedData,
    page: +page,
    perPage: +perPage,
    totalItems: filteredData.length,
    totalPages: Math.ceil(filteredData.length / perPage),
  });
};

let data = readDataFromJson();
const createOrder = (req, res) => {
  const newOrder = req.body;

  let newId = createId();
  while (!(newId in data)) {
    newId = createId();
  }
  newOrder.id = createId;
  newOrder.created = Date.now();

  data.push(newOrder);
  writeDataToJson(data);
  res.status(201).json(newOrder);
};

const updateOrder = (req, res) => {
  const orderId = req.params.id;
  const updatedOrder = req.body;

  const index = data.findIndex((item) => item.id === orderId);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedOrder };

    writeDataToJson(data);
    res.json(data[index]);
  } else {
    res.status(404).json({ message: "Orde does not exist" });
  }
};

module.exports = {
  getOrder,
  updateOrder,
  createOrder,
};
