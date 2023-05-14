import Router from "express"
import * as categoryProblemController from "../controllers/categoryProblemController.js"
import { categoryProblemValidation } from "../validators/index.js";
import handleValidationError from "../middleware/handleValidationError.js";
import checkAuthMiddleware from "../middleware/checkAuth.js";
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

router.post('/',checkAuthMiddleware,categoryProblemValidation,handleValidationError,categoryProblemController.create)
router.get('/',categoryProblemController.getAll)
router.get('/:id',categoryProblemController.getOne)
router.delete('/:id',roleMiddleware('superuser'), categoryProblemController.destroy)
router.put('/:id',checkAuthMiddleware,categoryProblemValidation,handleValidationError, categoryProblemController.edit)

export default router;