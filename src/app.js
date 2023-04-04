import express from "express";
const app = express();
const PORT = 5000;

app.use(express.json());

let users = []
let tweets = []

app.listen(PORT, () => console.log(`Server listening at: ${PORT}`))