import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js"

import db from "./models/index.js"
import errorHandler from "./middleware/ErrorHandling.js";

dotenv.config();

const app = express();

db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});