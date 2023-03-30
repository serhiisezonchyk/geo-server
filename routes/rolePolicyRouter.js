import Router from "express"
import * as rolePolicyController from "../controllers/rolePolicyController.js"

const router = new Router();

// router.post('/',roleMiddleware('ADMIN'),typeController.create)
router.post('/',rolePolicyController.create)
router.get('/',rolePolicyController.getAll)
router.get('/:id',rolePolicyController.getOne)
router.delete('/:id', rolePolicyController.destroy)
router.put('/:id', rolePolicyController.edit)

export default router;