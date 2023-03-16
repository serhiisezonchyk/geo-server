import Router from "express"
import * as adminShapesController from "../controllers/adminShapesController.js"

const router = new Router();

router.get('/', adminShapesController.getAll)
router.get('/:id', adminShapesController.getOne)
export default router;