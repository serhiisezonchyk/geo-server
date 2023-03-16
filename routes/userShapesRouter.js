import Router from "express"
import * as userShapesController from "../controllers/userShapesController.js"

const router = new Router();

router.get('/', userShapesController.getAll)
router.get('/:id', userShapesController.getOne)

export default router;