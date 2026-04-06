const get404Error = (req, res, next) => {
  res.status(404).render("error", { pageTitle: "Page Not Found", path: "*" });
};

module.exports = {
  get404Error: get404Error,
};
