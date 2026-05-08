import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
app.get("/health", (req, res) => {
  res.json({
    message: "Server is running and healthy",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
