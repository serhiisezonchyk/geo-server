import Router from "express"
import publicBuildingPointRouter  from "./layers/publicBuildingPointRouter.js"
import publicBuildingPolygonRouter from "./layers/publicBuildingPolygonRouter.js"
import problemInfoPointRouter from "../routes/layers/problemInfoPointRouter.js"

import categoryProblemRouter from "./categoryProblemRouter.js"
import roleRouter from "./roleRouter.js"
import userRouter from "./userRouter.js"
import rolePolicyRouter from "./rolePolicyRouter.js"
import policyRouter from "./policyRouter.js"
import staticRouter from "./staticRouter.js"


const router = new Router();

router.use('/categoryProblem', categoryProblemRouter)
router.use('/role',roleRouter);
router.use('/user',userRouter);
router.use('/policy', policyRouter);
router.use('/rolepolicy',rolePolicyRouter);

router.use('/publicBuildingPoint', publicBuildingPointRouter);
router.use('/publicBuildingPolygon', publicBuildingPolygonRouter);
router.use('/probleminfopoint',problemInfoPointRouter);
router.use('/static', staticRouter)

export default router;