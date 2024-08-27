import express from "express";
import bodyParser from "body-parser";
import connectMongo from "./connectMongo.js"; // Your connection file
import cors from "cors"
import { createMeals, getMeals } from "./controller/mealsController.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());


connectMongo();

app.get('/meals', getMeals);
app.post('/meals', createMeals)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});