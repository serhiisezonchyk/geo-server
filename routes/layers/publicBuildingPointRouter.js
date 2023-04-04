import Router from "express"
import * as publicBuildingPointController from "../../controllers/layers/publicBuildingPointController.js"

const router = new Router();

router.get('/', publicBuildingPointController.getAll)
router.get('/:id', publicBuildingPointController.getOne)

export default router;