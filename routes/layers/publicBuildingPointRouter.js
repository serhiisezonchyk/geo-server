import Router from "express"
import * as publicBuildingPointController from "../../controllers/layers/publicBuildingPointController.js"
import policyMiddleware from "../../middleware/checkAccess.js";

const router = new Router();

/**
 * @openapi
 * /api/publicBuildingPoint:
 *   get:
 *     tags:
 *       - PublicBuildingPoint
 *     summary: Get all public building points
 *     description: Retrieve a list of all public building points
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - gid: 1
 *                 type: Point
 *                 coordinates: [longitude, latitude]
 *               - gid: 2
 *                 type: Point
 *                 coordinates: [longitude, latitude]
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving public building points
 */
router.get('/',policyMiddleware('public_building_point'), publicBuildingPointController.getAll)
/**
 * @openapi
 * /api/publicBuildingPoint/{id}:
 *   get:
 *     tags:
 *       - PublicBuildingPoint
 *     summary: Get a public building point by ID
 *     description: Retrieve details of a public building point by its ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Public Building Point ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               gid: 1
 *               type: Point
 *               coordinates: [longitude, latitude]
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving public building point
 */
router.get('/:id',policyMiddleware('public_building_point'), publicBuildingPointController.getOne)

export default router;