import Router from "express"
import * as roleController from "../controllers/roleController.js"
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

router.post('/',roleMiddleware('superuser'),roleController.create)
router.get('/',roleMiddleware('superuser'),roleController.getAll)
router.get('/:id',roleMiddleware('superuser'),roleController.getOne)
router.delete('/:id',roleMiddleware('superuser'), roleController.destroy)
router.put('/:id',roleMiddleware('superuser'), roleController.edit)

export default router;