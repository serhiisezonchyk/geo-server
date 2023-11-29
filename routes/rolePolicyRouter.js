import Router from "express"
import * as rolePolicyController from "../controllers/rolePolicyController.js"
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

/**
 * @openapi
 * /api/rolepolicy:
 *   post:
 *     tags:
 *       - Role Policies
 *     summary: Create a new role policy
 *     description: Create a new role policy (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roleId:
 *                 type: integer
 *               policyId:
 *                 type: integer
 *             required:
 *               - roleId
 *               - policyId
 *     responses:
 *       200:
 *         description: Role Policy created successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while creating the role policy
 */
router.post('/',roleMiddleware('superuser'),rolePolicyController.create)
/**
 * @openapi
 * /api/rolepolicy:
 *   get:
 *     tags:
 *       - Role Policies
 *     summary: Get all role policies
 *     description: Get a list of all role policies (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of role policies retrieved successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving role policies
 */
router.get('/',roleMiddleware('superuser'),rolePolicyController.getAll)
/**
 * @openapi
 * /api/rolepolicy/{id}:
 *   get:
 *     tags:
 *       - Role Policies
 *     summary: Get role policy by ID
 *     description: Get details of a role policy by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role Policy ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Role Policy retrieved successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving role policy
 */
router.get('/:id',roleMiddleware('superuser'),rolePolicyController.getOne)
/**
 * @openapi
 * /api/rolepolicy/{id}:
 *   delete:
 *     tags:
 *       - Role Policies
 *     summary: Delete role policy by ID
 *     description: Delete a role policy by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role Policy ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Role Policy deleted successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Could not delete role policy
 */
router.delete('/:id',roleMiddleware('superuser'), rolePolicyController.destroy)
/**
 * @openapi
 * /api/rolepolicy/{id}:
 *   put:
 *     tags:
 *       - Role Policies
 *     summary: Edit role policy by ID
 *     description: Edit a role policy by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role Policy ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roleId:
 *                 type: integer
 *               policyId:
 *                 type: integer
 *             required:
 *               - roleId
 *               - policyId
 *     responses:
 *       200:
 *         description: Role Policy updated successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Could not update role policy
 */
router.put('/:id',roleMiddleware('superuser'), rolePolicyController.edit)

export default router;