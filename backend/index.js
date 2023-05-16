const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");

const port = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.log('Error connecting to database:', error);
});

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use("/food", foodRoutes);

app.use("/orders", orderRoutes);

app.listen(port, () => {
  console.log(`Server running in ${port}`);
});