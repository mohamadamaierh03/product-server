import express from "express";
import productRoutes from "./routes/products.js";

const app = express();
const PORT = 3001;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the Product API!");
});

// API routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
