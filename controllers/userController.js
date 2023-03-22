import { hash, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from "../models/index.js";
import ApiError from '../error/ApiError.js';
import {Op} from "sequelize"
const User = db.user;

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

export const create = async (req, res, next) =>{
  console.log("here")
    const newUser = {
        email : req.body.email,
        password : req.body.password, 
        roleId: req.body.roleId,
      };

    if (!newUser.email || !newUser.password) {
        return next(ApiError.badRequest('Incorrect email or password'))
    }
    await User.findOne({where: {email: newUser.email}})
    .then((candidate) => {
        if (candidate) {
            return next(ApiError.badRequest('This user is already exist'))
        }
    })

    const hashPassword = await hash(newUser.password, 5)
    newUser.password = hashPassword;
    const user = await User.create(newUser);
    const token = generateJwt(user.id, user.email, user.role)
    res.status(200).send({token})
}

export const login = async (req, res, next) =>{
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
        return next(ApiError.internal('Incorrect email or password'))
    }
    let comparePassword = compareSync(password, user.password)
    if (!comparePassword) {
        return next(ApiError.internal('Incorrect email or password'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    res.status(200).send({token})
}

export const getAll = async (req, res) => {
    await User.findAll({where: {roleId:{[Op.ne]: 1}}})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving roles.",
        });
      });
  };
  
  export const destroy = async (req, res) => {
    const id = req.params.id;
    await User.destroy({ id: id })
      .then((num) => {
        if (num == 1) {
          res.status(200).send({
            message: "User was deleted successfully!",
          });
        } else {
          res.status(401).send({
            message: `Cannot delete user with id=${id}. Maybe role was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete role with id=" + id,
        });
      });
  };

export const check = async (req, res, next) =>{
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    res.status(200).send({token})
}