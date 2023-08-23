const mongoose = require("mongoose");
require("dotenv").config();

  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster1.jwm6ryk.mongodb.net/jwt?retryWrites=true&w=majority`;
 mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected!!!"))
  .catch((error) => {
    console.log(error);
  });
