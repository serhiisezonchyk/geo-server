import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});