const express = require("express");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use('/admin', adminRoutes.router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});