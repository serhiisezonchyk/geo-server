import { verify } from "jsonwebtoken";

export default function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
        console.log(req.headers);
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "No access" });
      }
      const decoded = verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "No access" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: "No access" });
    }
  };
}
