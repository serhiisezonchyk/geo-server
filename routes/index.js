import Router from "express"
import userShapesRouter  from "./userShapesRouter.js"
import adminShapesRouter from "./adminShapesRouter.js"
import problemInfoPointRouter from "../routes/layers/problemInfoPointRouter.js"

import categoryProblemRouter from "./categoryProblemRouter.js"
import roleRouter from "./roleRouter.js"
import userRouter from "./userRouter.js"

const router = new Router();

router.use('/userShapes', userShapesRouter);
router.use('/adminShapes', adminShapesRouter);
router.use('/probleminfopoint',problemInfoPointRouter);
router.use('/categoryProblem', categoryProblemRouter)
router.use('/role',roleRouter);
router.use('/user',userRouter);

export default router;