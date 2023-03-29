import db from "../../models/index.js";

const Problem_info_point = db.problem_info_point;
const Category_problem = db.category_problem;

export const getAll = async (req, res) => {
  try {
    const geom = await Problem_info_point.findAll({
      attributes: [
        "id",
        [db.sequelize.fn("ST_AsGeoJSON", db.sequelize.col("geom")), "geojson"],
      ],
      include: [
        {
          model: Category_problem,
        },
      ],
    });

    const response = geom.map((element) => {
      const id = element.id;
      const geoJson = JSON.parse(element.dataValues.geojson);
      const type = geoJson.type;
      const coordinates = geoJson.coordinates;
      const category_problem = element.category_problem;

      return { id, type, coordinates, category_problem};
    });
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving shapes.",
    });
  }
};

export const getAllByCategories = async (req, res) => {
  let { categoryProblemId } = req.query;
  console.log(req.query);
  try {
    const geom = await Problem_info_point.findAll({
      where: { categoryProblemId: categoryProblemId.categoryProblemId },
      attributes: [
        "id",
        [db.sequelize.fn("ST_AsGeoJSON", db.sequelize.col("geom")), "geojson"],
      ],
      include: [
        {
          model: Category_problem,
        },
      ],
    });

    const response = geom.map((element) => {
      const id = element.id;
      const geoJson = JSON.parse(element.dataValues.geojson);
      const type = geoJson.type;
      const coordinates = geoJson.coordinates;
      const category_problem = element.category_problem;
      return { id, type, coordinates, category_problem };
    });

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving shapes.",
    });
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  await Problem_info_point.findOne({
    where: { id },
    attributes: [
      "id",
      "img",
      "description",
      "createdAt",
      "updatedAt",
      "categoryProblemId",
    ],
    include: [
      {
        model: Category_problem,
      },
    ],
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving shape.",
      });
    });
};

export const edit = async (req, res) => {
  const id = req.params.id;
  await Problem_info_point.update(req.body)
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Problem_info_point was updated successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot update Problem_info_point with id=${id}. Maybe Problem_info_point was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Problem_info_point with id=" + id,
      });
    });
};

export const destroy = async (req, res) => {
  const id = req.params.id;
  await Problem_info_point.destroy({ id: id })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({
          message: "Problem_info_point was deleted successfully!",
        });
      } else {
        res.status(401).send({
          message: `Cannot delete Problem_info_point with id=${id}. Maybe Problem_info_point was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Problem_info_point with id=" + id,
      });
    });
};
