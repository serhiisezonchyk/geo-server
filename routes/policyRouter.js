import Router from "express"
import * as policyController from "../controllers/policyController.js"

const router = new Router();

// router.post('/',roleMiddleware('ADMIN'),typeController.create)
router.post('/',policyController.create)
router.get('/',policyController.getAll)
router.get('/:id',policyController.getOne)
router.delete('/:id', policyController.destroy)
router.put('/:id', policyController.edit)

export default router;