import db from "../models/index.js";

const Role = db.role;

export const create = async (req, res) => {
  const role = {
    name: req.body.name,
  };
  await Role.create(role)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the Role.",
      });
    });
};

export const getAll = async (req, res) => {
  await Role.findAll()
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
  await Role.destroy({ id: id })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Role was deleted successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot delete role with id=${id}. Maybe role was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete role with id=" + id,
      });
    });
};

export const edit = async (req, res) => {
  const id = req.params.id;
  await Role.update(req.body)
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Role was updated successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot update role with id=${id}. Maybe role was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete role with id=" + id,
      });
    });
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  await Role.findOne({
    where: { id },
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving role.",
      });
    });
};
