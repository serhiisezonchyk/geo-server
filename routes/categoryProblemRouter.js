import Router from "express"
import * as categoryProblemController from "../controllers/categoryProblemController.js"
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

// router.post('/',roleMiddleware('ADMIN'),typeController.create)
router.post('/',categoryProblemController.create)
router.get('/',categoryProblemController.getAll)
router.get('/:id',categoryProblemController.getOne)
router.delete('/:id', categoryProblemController.destroy)
router.put('/:id', categoryProblemController.edit)

export default router;