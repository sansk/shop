const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes.router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});