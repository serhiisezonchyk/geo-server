import Router from "express"
import * as publicBuildingPolygonController from "../../controllers/layers/publicBuildingPolygonController.js"
import policyMiddleware from "../../middleware/checkAccess.js";

const router = new Router();

router.get('/',policyMiddleware('public_building_polygon'), publicBuildingPolygonController.getAll)
router.get('/:id',policyMiddleware('public_building_polygon'), publicBuildingPolygonController.getOne)
export default router;