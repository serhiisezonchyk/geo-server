import Router from "express"
import * as problemInfoPointControlle from "../../controllers/layers/problemInfoPointController.js"
import checkAuthMiddleware from "../../middleware/checkAuth.js";

const router = new Router();

router.get('/',problemInfoPointControlle.getAll)
router.get('/categories',problemInfoPointControlle.getAllByCategories)
router.get('/:id',problemInfoPointControlle.getOne)
router.delete('/:id', checkAuthMiddleware, problemInfoPointControlle.destroy)
router.put('/:id', checkAuthMiddleware, problemInfoPointControlle.edit)

export default router;