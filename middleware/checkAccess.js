import { verify } from "jsonwebtoken";
import db from "../models/index.js";

const User = db.user;
const Role = db.role;
const Policy = db.policy;

export default function (policy_name) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "No access" });
      }
      const decoded = verify(token, process.env.SECRET_KEY);
      console.log(decoded.id);

      User.findByPk(decoded.id, {
        include: [
          {
            model: Role,
            include: Policy,
          },
        ],
      }).then((data) => {
        let hasAccess = false;
        data.role.policies.map((el) => {
          if (policy_name === el.dataValues.name) hasAccess = true;
        });
        if (hasAccess) {
          next();
        } else {
          res.status(401).json({ message: "No access" });
        }
      });
    } catch (e) {
      res.status(401).json({ message: "No access" });
    }
  };
}
