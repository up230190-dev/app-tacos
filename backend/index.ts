import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products"; 
import salesRoutes from "./routes/sales";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/sales", salesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});