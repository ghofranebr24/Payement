const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");

// app
const app = express();
//imoprt routes
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");
const brainRouter = require("./routes/braintree");
const orderRouter = require("./routes/order");

//middleWare
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(expressValidator());
app.use(cors()); //front end on 3000 and backend on 8000: cors will handle this issue

//routes Middleware
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/braintree", brainRouter);
app.use("/api/order", orderRouter);

// db
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database Connected");
	});

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.send("hello from node");
});

app.listen(PORT, () => {
	console.log(`Running on PORT ${PORT}`);
});
