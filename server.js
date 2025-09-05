const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const clientRoutes = require("./routes/clientRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors({}));

connectDB();

// Rotas de cliente
app.use("/api/clients", clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
