const express = require("express");
const {
  getInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");

const router = express.Router();

router.route("/").get(getInvoices).post(createInvoice);

router
  .route("/:id")
  .get(getInvoiceById)
  .put(updateInvoice)
  .delete(deleteInvoice);

module.exports = router;
