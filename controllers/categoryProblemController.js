import db from "../models/index.js";

const Category_problem = db.category_problem;

export const create = async (req, res) => {
  const category_problem = {
    name: req.body.name,
  };
  await Category_problem.create(category_problem)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Category_problem.",
      });
    });
};

export const getAll = async (req, res) => {
  await Category_problem.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Category_problem.",
      });
    });
};

export const destroy = async (req, res) => {
  const id = req.params.id;
  await Category_problem.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Category_problem was deleted successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot delete Category_problem with id=${id}. Maybe Category_problem was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log("Error", err, "/nThe end/n");
      res.status(500).send({
        message: "Could not delete Category_problem with id=" + id,
      });
    });
};

export const edit = async (req, res) => {
  const id = req.params.id;
  await Category_problem.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Category_problem was updated successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot update Category_problem with id=${id}. Maybe Category_problem was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not update Category_problem with id=" + id,
      });
    });
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  await Category_problem.findOne({
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
