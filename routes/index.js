import Router from "express"
import userShapesRouter  from "./userShapesRouter.js"
import adminShapesRouter from "./adminShapesRouter.js"
import problemInfoPointRouter from "../routes/layers/problemInfoPointRouter.js"

import categoryProblemRouter from "./categoryProblemRouter.js"
import roleRouter from "./roleRouter.js"
import userRouter from "./userRouter.js"
import rolePolicyRouter from "./rolePolicyRouter.js"
import policyRouter from "./policyRouter.js"

const router = new Router();

router.use('/categoryProblem', categoryProblemRouter)
router.use('/role',roleRouter);
router.use('/user',userRouter);
router.use('/policy', policyRouter);
router.use('/rolepolicy',rolePolicyRouter);

router.use('/userShapes', userShapesRouter);
router.use('/adminShapes', adminShapesRouter);
router.use('/probleminfopoint',problemInfoPointRouter);

export default router;