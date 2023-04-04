import Router from "express"
import * as publicBuildingPolygonController from "../../controllers/layers/publicBuildingPolygonController.js"

const router = new Router();

router.get('/', publicBuildingPolygonController.getAll)
router.get('/:id', publicBuildingPolygonController.getOne)
export default router;