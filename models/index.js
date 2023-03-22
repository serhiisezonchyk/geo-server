import { Sequelize, DataTypes } from "sequelize";

import user from "./user.js";
import role from "./role.js";
import applyExtraSetup from "./extra_setup.js";

import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
  }
);

const db = {};

db.DataTypes = DataTypes;
db.sequelize = sequelize;

db.user = user(sequelize, DataTypes);
db.role = role(sequelize, DataTypes);

applyExtraSetup(db);
export default db;
