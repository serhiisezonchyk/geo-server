import db from '../models/index.js';
const Policy = db.policy;

export const create = async (req, res) => {
  const policy = {
    name: req.body.name,
    label: req.body.label,
    description: req.body.description
  };
  await Policy.create(policy)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the Policy.",
      });
    });
};

export const getAll = async (req, res) => {
  await Policy.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving policies.",
      });
    });
};

export const destroy = async (req, res) => {
  const id = req.params.id;
  await Policy.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Policy was deleted successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot delete policy with id=${id}. Maybe policy was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete policy with id=" + id,
      });
    });
};

export const edit = async (req, res) => {
  const id = req.params.id;
  const policy = {
    name: req.body.name,
    label: req.body.label,
    description: req.body.description
  };
  await Policy.update(policy, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Policy was updated successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot update policy with id=${id}. Maybe policy was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not update policy with id=" + id,
      });
    });
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  await Policy.findOne({
    where: { id },
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving policy.",
      });
    });
};