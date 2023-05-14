import Router from "express"
import * as userController from "../controllers/userController.js"
import authMiddleware from "../middleware/auth.js";
import { registerValidation } from "../validators/index.js";
import handleValidationError from "../middleware/handleValidationError.js";
import roleMiddleware from "../middleware/checkRole.js";
import checkAuthMiddleware from "../middleware/checkAuth.js";

const router = new Router();

router.post('/create',roleMiddleware('superuser'),registerValidation,handleValidationError,userController.create);
router.post('/login',userController.login);
router.get('/auth',authMiddleware, userController.check);
router.get('/',roleMiddleware('superuser'), userController.getAll);
router.delete('/:id',roleMiddleware('superuser'), userController.destroy);
router.get('/:id/policies',checkAuthMiddleware, userController.getPoliciesByUserId);

export default router;