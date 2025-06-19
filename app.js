const express = require("express");
const morgan = require("morgan");

const app = express();

const productRouter = require("./routes/productRoutes");

app.use(express.json());
app.use("/api/v1/products", productRouter);

// 4. Start the server
module.exports = app;
