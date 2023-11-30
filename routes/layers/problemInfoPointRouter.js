import Router from 'express';
import * as problemInfoPointControlle from '../../controllers/layers/problemInfoPointController.js';
import checkAuthMiddleware from '../../middleware/checkAuth.js';

const router = new Router();
/**
 * @openapi
 * /api/probleminfopoint:
 *   get:
 *     tags:
 *       - Problem Info Points
 *     summary: Get all problem info points
 *     description: Retrieve a list of all problem info points
 *     responses:
 *       200:
 *         description: List of problem info points retrieved successfully
 *       500:
 *         description: Some error occurred while retrieving problem info points
 */
router.get('/', problemInfoPointControlle.getAll);
/**
 * @openapi
 * /api/probleminfopoint/categories:
 *   get:
 *     tags:
 *       - Problem Info Points
 *     summary: Get all problem info points by category
 *     description: Retrieve a list of problem info points based on category
 *     parameters:
 *       - in: query
 *         name: categoryProblemId
 *         description: Category problem ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of problem info points retrieved successfully
 *       500:
 *         description: Some error occurred while retrieving problem info points
 */
router.get('/categories', problemInfoPointControlle.getAllByCategories);
/**
 * @openapi
 * /api/probleminfopoint/{id}:
 *   get:
 *     tags:
 *       - Problem Info Points
 *     summary: Get problem info point by ID
 *     description: Retrieve details of a problem info point by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Problem info point ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Problem info point retrieved successfully
 *       500:
 *         description: Some error occurred while retrieving the problem info point
 */
router.get('/:id', problemInfoPointControlle.getOne);
/**
 * @openapi
 * /api/probleminfopoint/{id}:
 *   delete:
 *     tags:
 *       - Problem Info Points
 *     summary: Delete problem info point by ID
 *     description: Delete a problem info point by its ID (Requires authentication)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Problem info point ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Problem info point deleted successfully
 *       401:
 *         description: Authentication failed
 *       500:
 *         description: Could not delete the problem info point
 */
router.delete('/:id', checkAuthMiddleware, problemInfoPointControlle.destroy);
/**
 * @openapi
 * /api/probleminfopoint/{id}:
 *   put:
 *     tags:
 *       - Problem Info Points
 *     summary: Edit problem info point by ID
 *     description: Edit a problem info point by its ID (Requires authentication)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Problem info point ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProblemInfoPointEdit'
 *     responses:
 *       200:
 *         description: Problem info point updated successfully
 *       401:
 *         description: Authentication failed
 *       500:
 *         description: Could not update the problem info point
 */
router.put('/:id', checkAuthMiddleware, problemInfoPointControlle.edit);

export default router;
