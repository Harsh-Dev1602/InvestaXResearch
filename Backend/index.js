import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter  from "./routes/admin.route.js"

import seedAdmin from "./controllers/admin.controller.js";

dotenv.config();
const App = express();
App.use(express.json());
App.use(cors( ));
App.use(cookieParser());

const port = process.env.PORT;
const DB_URL = process.env.DB_URL;

try {
    mongoose.connect(DB_URL);
    console.log("Mongo DB connected..");
    seedAdmin();
} catch (error) {
    console.log(error);
}

App.use("/api/admin",adminRouter);

App.listen(port, () => (
    console.log(`Backend run this url http://localhost:${port}`)
));