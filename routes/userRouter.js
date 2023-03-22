import Router from "express"
import * as userController from "../controllers/userController.js"
import authMiddleware from "../middleware/auth.js";
const router = new Router();

router.post('/create',userController.create);
router.post('/login',userController.login);
router.get('/auth',authMiddleware, userController.check);
router.get('/', userController.getAll);
router.delete('/:id', userController.destroy);

export default router;