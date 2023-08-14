require("dotenv").config();
import express from "express";
import cors from "cors";
import router from "./routes/index";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";
console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI);

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

const app: express.Application = express();
const port = process.env.PORT || 3000;

app.options(
    "*",
    cors({
        origin: "https://fire-code.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
    console.log(`server listening at port: ${port}`);
});
