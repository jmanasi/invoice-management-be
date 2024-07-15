const db = require("../config/db");

const Invoice = {
  getAll: (callback) => {
    db.query("SELECT * FROM invoices", callback);
  },
  getById: (id, callback) => {
    db.query("SELECT * FROM invoices WHERE id = ?", [id], callback);
  },
  create: (invoice, callback) => {
    db.query("INSERT INTO invoices SET ?", invoice, callback);
  },
  update: (id, invoice, callback) => {
    db.query("UPDATE invoices SET ? WHERE id = ?", [invoice, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM invoices WHERE id = ?", [id], callback);
  },
  getNextInvoiceNumber: (callback) => {
    db.query(
      "SELECT MAX(invoice_number) AS maxInvoiceNumber FROM invoices",
      callback
    );
  },
};

module.exports = Invoice;
