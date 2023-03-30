import db from "../models/index.js";
const RolePolicy = db.role_policy;

export const create = async (req, res) => {
  const rolePolicy = {
    roleId: req.body.roleId,
    policyId: req.body.policyId,
  };
  await RolePolicy.create(rolePolicy)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while creating the Role Policy.",
      });
    });
};

export const getAll = async (req, res) => {
  await RolePolicy.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving role policies.",
      });
    });
};

export const destroy = async (req, res) => {
  const id = req.params.id;
  await RolePolicy.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Role Policy was deleted successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot delete role policy with id=${id}. Maybe role policy was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete role policy with id=" + id,
      });
    });
};

export const edit = async (req, res) => {
  const id = req.params.id;
  await RolePolicy.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Role Policy was updated successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot update role policy with id=${id}. Maybe role policy was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not update role policy with id=" + id,
      });
    });
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  await RolePolicy.findOne({
    where: { id },
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving role policy.",
      });
    });
};