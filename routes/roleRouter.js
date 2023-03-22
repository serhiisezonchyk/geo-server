import Router from "express"
import * as roleController from "../controllers/roleController.js"
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

// router.post('/',roleMiddleware('ADMIN'),typeController.create)
router.post('/',roleController.create)
router.get('/',roleController.getAll)
router.get('/:id',roleController.getOne)
router.delete('/:id', roleController.destroy)
router.put('/:id', roleController.edit)

export default router;