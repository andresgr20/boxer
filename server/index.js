const express = require("express");
const cors = require("cors");
const app = express();
const apiRoutes = require("./src/routes/api");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
