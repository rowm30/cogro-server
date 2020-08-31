import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import goalRoutes from "./routes";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app: Express = express()
dotenv.config();
const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(goalRoutes)

const uri: string  = process.env.MONGO_URL as string;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
)
    .catch(error => {
        throw error
    })
