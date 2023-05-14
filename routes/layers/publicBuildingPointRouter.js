import Router from "express"
import * as publicBuildingPointController from "../../controllers/layers/publicBuildingPointController.js"
import policyMiddleware from "../../middleware/checkAccess.js";

const router = new Router();

router.get('/',policyMiddleware('public_building_point'), publicBuildingPointController.getAll)
router.get('/:id',policyMiddleware('public_building_point'), publicBuildingPointController.getOne)

export default router;