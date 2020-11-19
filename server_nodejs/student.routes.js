module.exports = app => {
  const students = require("./student.controller.js");

  // Create a new Customer
  app.post("/students", students.create);

  // Retrieve all Customers
  app.get("/students", students.findAll);

  // Retrieve a single Customer with customerId
  app.get("/students/:studentId", students.findOne);

  // Update a Customer with customerId
  app.put("/students/:studentId", students.update);

  // Delete a Customer with customerId
  app.delete("/students/:studentId", students.delete);

  // Create a new Customer
  app.delete("/students", students.deleteAll);
};