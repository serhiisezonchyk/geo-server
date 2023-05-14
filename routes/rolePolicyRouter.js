import Router from "express"
import * as rolePolicyController from "../controllers/rolePolicyController.js"
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

router.post('/',roleMiddleware('superuser'),rolePolicyController.create)
router.get('/',roleMiddleware('superuser'),rolePolicyController.getAll)
router.get('/:id',roleMiddleware('superuser'),rolePolicyController.getOne)
router.delete('/:id',roleMiddleware('superuser'), rolePolicyController.destroy)
router.put('/:id',roleMiddleware('superuser'), rolePolicyController.edit)

export default router;