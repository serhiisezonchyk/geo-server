import pool from "../../models/db.js";

export const getAll = async (req, res) => {
  try {
    const geom = await pool.query(
      "SELECT gid, ST_AsGeoJSON(geom) FROM public_building_polygon"
    );
    const response = geom.rows.map((element) => {
      const gid = element.gid;
      const geoJson = JSON.parse(element.st_asgeojson);
      const type = geoJson.type;
      const coordinates = geoJson.coordinates;
      return { gid, type, coordinates };
    });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving shapes.",
    });
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await pool.query(
      "SELECT * FROM public_building_polygon WHERE gid = $1",
      [id]
    );
    res.status(200).send(response.rows);
  } catch (err) {
    res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shapes.",
      });
  }
};
