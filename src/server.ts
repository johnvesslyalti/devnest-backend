import express from "express";

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Radhe Radhe!")
});
app.listen(5000, () => console.log("Server is running at 5000"))