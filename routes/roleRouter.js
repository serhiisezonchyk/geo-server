import Router from "express"
import * as roleController from "../controllers/roleController.js"
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

/**
 * @openapi
 * /api/roles:
 *   post:
 *     tags:
 *       - Roles
 *     summary: Create a new role
 *     description: Create a new role (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Role created successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while creating the role
 */
router.post('/',roleMiddleware('superuser'),roleController.create)
/**
 * @openapi
 * /api/roles:
 *   get:
 *     tags:
 *       - Roles
 *     summary: Get all roles
 *     description: Get a list of all roles (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of roles retrieved successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving roles
 */
router.get('/',roleMiddleware('superuser'),roleController.getAll)
/**
 * @openapi
 * /api/roles/{id}:
 *   get:
 *     tags:
 *       - Roles
 *     summary: Get role by ID
 *     description: Get details of a role by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Role retrieved successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving role
 */
router.get('/:id',roleMiddleware('superuser'),roleController.getOne)
/**
 * @openapi
 * /api/roles/{id}:
 *   delete:
 *     tags:
 *       - Roles
 *     summary: Delete role by ID
 *     description: Delete a role by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Could not delete role
 */
router.delete('/:id',roleMiddleware('superuser'), roleController.destroy)
/**
 * @openapi
 * /api/roles/{id}:
 *   put:
 *     tags:
 *       - Roles
 *     summary: Edit role by ID
 *     description: Edit a role by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Role ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Role updated successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Could not update role
 */
router.put('/:id',roleMiddleware('superuser'), roleController.edit)

export default router;