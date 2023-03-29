import Router from "express"
import * as problemInfoPointControlle from "../../controllers/layers/problemInfoPointController.js"

const router = new Router();

router.get('/',problemInfoPointControlle.getAll)
router.get('/categories',problemInfoPointControlle.getAllByCategories)
router.get('/:id',problemInfoPointControlle.getOne)
router.delete('/:id', problemInfoPointControlle.destroy)
router.put('/:id', problemInfoPointControlle.edit)

export default router;