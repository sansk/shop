const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).render("error", { pageTitle: "Page Not Found", path: "*" });
});

module.exports = {
  router: router,
};
