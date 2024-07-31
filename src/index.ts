import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Endpoint untuk menambah produk
app.post("/products", (req: Request, res: Response) => {
  const { name, price } = req.body;
  // Logika untuk menambah produk
  res.send("Product added");
});

// Endpoint untuk mendapatkan semua produk
app.get("/products", (req: Request, res: Response) => {
  // Logika untuk mendapatkan semua produk
  res.send("List of products");
});

// Endpoint untuk register user
app.post("/register", (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Logika untuk register user
  res.send("User registered");
});

// Endpoint untuk login user
app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Logika untuk login user
  res.send("User logged in");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
