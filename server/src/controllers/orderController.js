const orderService = require("../services/orderService");
const dataManager = require("../dataManager");

const getOrders = (req, res) => {
  const filterBySize = req.query.size;
  const filterByCondition = req.query.condition;
  const filterByType = req.query.type;
  const filterByStatus = req.query.status;

  // filter by any
  let filteredData = dataManager.getData();
  const filters = [
    { key: "condition", value: filterByCondition },
    { key: "size", value: filterBySize },
    { key: "type", value: filterByType },
    { key: "status", value: filterByStatus },
  ];

  filters.forEach((filter) => {
    if (filter.value) {
      filteredData = filteredData.filter(
        (order) => order[filter.key] === filter.value
      );
    }
  });

  // Sort the data in ascending order by desc date
  filteredData.sort((a, b) => new Date(a.created) - new Date(b.created));

  res.json({
    data: filteredData,
    totalItems: filteredData.length,
  });
};

const createOrder = (req, res) => {
  const newOrder = orderService.createOrder(req.body);
  const data = dataManager.getData();
  data.push(newOrder);
  dataManager.setData(data);
  res.status(201).json(newOrder);
};

const updateOrder = (req, res) => {
  const orderId = req.params.id;
  const updateOrder = req.body;
  const data = dataManager.getData();
  const orderIndex = data.findIndex((item) => item.id === orderId);
  if (orderIndex !== -1) {
    data[orderIndex] = orderService.updateOrder(data[orderIndex], updateOrder);
    dataManager.setData(data);
    res.status(201).json(data[orderIndex]);
  } else {
    res.status(404).json({ message: "Order does not exist" });
  }
};

module.exports = {
  getOrders,
  updateOrder,
  createOrder,
};
