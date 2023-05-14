import Router from "express"
import * as policyController from "../controllers/policyController.js"
import { policyValidation } from "../validators/index.js";
import handleValidationError from "../middleware/handleValidationError.js";
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

router.post('/',roleMiddleware('superuser'),policyValidation, handleValidationError,policyController.create)
router.get('/',roleMiddleware('superuser'),policyController.getAll)
router.get('/:id',roleMiddleware('superuser'),policyController.getOne)
router.delete('/:id',roleMiddleware('superuser'), policyController.destroy)
router.put('/:id',roleMiddleware('superuser'),policyValidation, handleValidationError, policyController.edit)

export default router;