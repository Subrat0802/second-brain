import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
