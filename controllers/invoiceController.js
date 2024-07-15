const Invoice = require("../models/invoiceModel");

const getInvoices = (req, res, next) => {
  Invoice.getAll((err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

const getInvoiceById = (req, res, next) => {
  Invoice.getById(req.params.id, (err, results) => {
    if (err) return next(err);
    res.json(results[0]);
  });
};

const createInvoice = (req, res, next) => {
  Invoice.getNextInvoiceNumber((err, result) => {
    if (err) return next(err);

    const nextInvoiceNumber = (result[0].maxInvoiceNumber || 0) + 1;
    const newInvoice = { ...req.body, invoice_number: nextInvoiceNumber };

    Invoice.create(newInvoice, (err, results) => {
      if (err) return next(err);
      res.status(201).json({ id: results.insertId, ...newInvoice });
    });
  });
};

const updateInvoice = (req, res, next) => {
  Invoice.update(req.params.id, req.body, (err) => {
    if (err) return next(err);
    res.json({ message: "Invoice updated successfully" });
  });
};

const deleteInvoice = (req, res, next) => {
  Invoice.delete(req.params.id, (err) => {
    if (err) return next(err);
    res.json({ message: "Invoice deleted successfully" });
  });
};

module.exports = {
  getInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
