const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "orders.json");

let data = [];

const readDataFromJson = () => {
  try {
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    data = JSON.parse(jsonData).orders || [];
  } catch (err) {
    data = [];
  }
};

const writeDataToJson = () => {
  fs.writeFileSync(
    dataPath,
    JSON.stringify({ orders: data }, null, 2),
    "utf-8"
  );
};

readDataFromJson();

module.exports = {
  getData: () => data,
  setData: (newData) => {
    data = newData;
    writeDataToJson();
  },
};
