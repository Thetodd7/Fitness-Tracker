const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const viewCont = require("./controllers/view");
const apiCont = require("./controllers/api");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutDB', {
    useNewUrlParser: true,
    useFindAndModify: false, 
    useUnifiedTopology: true
});

app.use(apiCont);
app.use(viewCont);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});