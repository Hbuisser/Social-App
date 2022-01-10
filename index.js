const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");
const postsRoute = require("./routes/posts.js");


const app = express();
dotenv.config();
mongoose.connect(
    process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("Connected to MongoDB")
    }
);

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);


// to connect to the port: 
// app.get("/", (req, res) => {
//     res.send("Welcome to homepage");
// })


app.listen(8800, () => {
    console.log("Backend server is running ");
});