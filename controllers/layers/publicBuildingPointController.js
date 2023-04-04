import pool from "../../models/db.js";

export const getAll = (req, res) => {
  pool.query("SELECT gid, ST_AsGeoJSON(geom) FROM public_building_point",
  (error, geom) => {
    if(error){
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving shapes.",
      });
    }
    const response = geom.rows.map((element) => {
      const gid = element.gid;
      const geoJson = JSON.parse(element.st_asgeojson);
      const type = geoJson.type;
      const coordinates = geoJson.coordinates;
      return { gid, type, coordinates };
    });
    res.status(200).send(response);
  })
};

export const getOne = (req, res) => {
  const { id } = req.params;
  pool.query(
    "SELECT * FROM public_building_point WHERE gid = $1",
    [id],
    (error, response) => {
      if (error) {
        res.status(500).send({
          message:
            error.message || "Some error occurred while retrieving shapes.",
        });
      }
      res.status(200).json(response.rows);
    }
  );
};
