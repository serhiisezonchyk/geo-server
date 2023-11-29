import Router from 'express';
import * as policyController from '../controllers/policyController.js';
import { policyValidation } from '../validators/index.js';
import handleValidationError from '../middleware/handleValidationError.js';
import roleMiddleware from '../middleware/checkRole.js';

const router = new Router();

/**
 * @openapi
 * /api/policy:
 *   post:
 *     tags:
 *       - Policies
 *     summary: Create a new policy
 *     description: Create a new policy (Only accessible by superuser)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               label:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - label
 *               - description
 *     responses:
 *       200:
 *         description: Policy created successfully
 *       401:
 *         description: Authentication failed or access denied
 *       400:
 *         description: Validation error
 *       500:
 *         description: Some error occurred while creating the policy
 */
router.post(
  '/',
//   roleMiddleware('superuser'),
//   policyValidation,
//   handleValidationError,
  policyController.create
);
/**
 * @openapi
 * /api/policy:
 *   get:
 *     tags:
 *       - Policies
 *     summary: Get all policies
 *     description: Get a list of all policies (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of policies retrieved successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving policies
 */
router.get('/', roleMiddleware('superuser'), policyController.getAll);
/**
 * @openapi
 * /api/policies/{id}:
 *   get:
 *     tags:
 *       - Policies
 *     summary: Get policy by ID
 *     description: Get details of a policy by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Policy ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Policy retrieved successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Some error occurred while retrieving policy
 */
router.get('/:id', roleMiddleware('superuser'), policyController.getOne);
/**
 * @openapi
 * /api/policy/{id}:
 *   delete:
 *     tags:
 *       - Policies
 *     summary: Delete policy by ID
 *     description: Delete a policy by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Policy ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Policy deleted successfully
 *       401:
 *         description: Authentication failed or access denied
 *       500:
 *         description: Could not delete policy
 */
router.delete('/:id', roleMiddleware('superuser'), policyController.destroy);
/**
 * @openapi
 * /api/policy/{id}:
 *   put:
 *     tags:
 *       - Policies
 *     summary: Edit policy by ID
 *     description: Edit a policy by its ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Policy ID
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
 *               label:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - label
 *               - description
 *     responses:
 *       200:
 *         description: Policy updated successfully
 *       401:
 *         description: Authentication failed or access denied
 *       400:
 *         description: Validation error
 *       500:
 *         description: Could not update policy
 */
router.put(
  '/:id',
  roleMiddleware('superuser'),
  policyValidation,
  handleValidationError,
  policyController.edit
);

export default router;
