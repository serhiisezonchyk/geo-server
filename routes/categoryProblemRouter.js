import Router from "express"
import * as categoryProblemController from "../controllers/categoryProblemController.js"
import { categoryProblemValidation } from "../validators/index.js";
import handleValidationError from "../middleware/handleValidationError.js";
import checkAuthMiddleware from "../middleware/checkAuth.js";
import roleMiddleware from "../middleware/checkRole.js";

const router = new Router();

/**
 * @openapi
 * /api/category-problem:
 *   post:
 *     tags:
 *       - Category Problem
 *     summary: Create a new category problem
 *     description: Create a new category problem (Requires authentication)
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
 *         description: Category problem created successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Authentication failed
 *       500:
 *         description: Some error occurred while creating the category problem
 */
router.post('/',checkAuthMiddleware,categoryProblemValidation,handleValidationError,categoryProblemController.create)
/**
 * @openapi
 * /api/category-problem:
 *   get:
 *     tags:
 *       - Category Problem
 *     summary: Get all category problems
 *     description: Get a list of all category problems
 *     responses:
 *       200:
 *         description: List of category problems retrieved successfully
 *       500:
 *         description: Some error occurred while retrieving category problems
 */
router.get('/',categoryProblemController.getAll)
/**
 * @openapi
 * /api/category-problem/{id}:
 *   get:
 *     tags:
 *       - Category Problem
 *     summary: Get category problem by ID
 *     description: Get details of a category problem by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Category problem ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Category problem retrieved successfully
 *       500:
 *         description: Some error occurred while retrieving category problem
 */
router.get('/:id',categoryProblemController.getOne)
/**
 * @openapi
 * /api/category-problem/{id}:
 *   delete:
 *     tags:
 *       - Category Problem
 *     summary: Delete category problem by ID
 *     description: Delete a category problem by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Category problem ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Category problem deleted successfully
 *       401:
 *         description: Cannot delete category problem, category problem not found
 *       500:
 *         description: Could not delete category problem
 */
router.delete('/:id',roleMiddleware('superuser'), categoryProblemController.destroy)
/**
 * @openapi
 * /api/category-problem/{id}:
 *   put:
 *     tags:
 *       - Category Problem
 *     summary: Edit category problem by ID
 *     description: Edit a category problem by its ID (Requires authentication)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Category problem ID
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
 *         description: Category problem updated successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Authentication failed
 *       500:
 *         description: Could not update category problem
 */
router.put('/:id',checkAuthMiddleware,categoryProblemValidation,handleValidationError, categoryProblemController.edit)

export default router;