import Router from "express"
import userShapesRouter  from "./userShapesRouter.js"
import adminShapesRouter from "./adminShapesRouter.js"

const router = new Router();

router.use('/userShapes', userShapesRouter);
router.use('/adminShapes', adminShapesRouter);

export default router;