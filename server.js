const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./config/db");
const invoiceRoutes = require("./routes/invoiceRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api/invoices", invoiceRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
