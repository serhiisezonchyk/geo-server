import Router from 'express';
import * as userController from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';
import { registerValidation } from '../validators/index.js';
import handleValidationError from '../middleware/handleValidationError.js';
import roleMiddleware from '../middleware/checkRole.js';
import checkAuthMiddleware from '../middleware/checkAuth.js';

const router = new Router();

/**
 * @openapi
 * /api/user/create:
 *   post:
 *     tags:
 *       - User
 *     summary: Register a new user
 *     description: Create a new user account (Only a superuser can create a new account)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               roleId:
 *                 type: integer
 *             required:
 *               - email
 *               - password
 *               - roleId
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Authentication failed
 *       403:
 *         description: Access denied
 *       500:
 *         description: Some error occurred while creating the user
 */
router.post(
  '/create',
  // roleMiddleware('superuser'),
  // registerValidation,
  // handleValidationError,
  userController.create
);
/**
 * @openapi
 * /api/user/login:
 *   post:
 *     tags:
 *       - User
 *     summary: User login
 *     description: Authenticate and generate a JWT token for the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *       500:
 *         description: Incorrect email or password
 */
router.post('/login', userController.login);

/**
 * @openapi
 * /api/user/auth:
 *   get:
 *     tags:
 *       - User
 *     summary: Check user authentication
 *     description: Validate the user's token and generate a new one
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User authenticated successfully
 */
router.get('/auth', authMiddleware, userController.check);
/**
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all users
 *     description: Get a list of all users (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *       403:
 *         description: Access denied
 *       500:
 *         description: Some error occurred while retrieving users
 */
router.get('/', roleMiddleware('superuser'), userController.getAll);
/**
 * @openapi
 * /api/user/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete user by ID
 *     description: Delete a user by their ID (Only accessible by superuser)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Cannot delete user, user not found
 *       500:
 *         description: Could not delete user
 */
router.delete('/:id', roleMiddleware('superuser'), userController.destroy);
/**
 * @openapi
 * /api/user/{id}/policies:
 *   get:
 *     tags:
 *       - User
 *     summary: Get policies by user ID
 *     description: Get policies associated with a user by their ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Policies retrieved successfully
 *       500:
 *         description: Some error occurred while retrieving policies
 */
router.get(
  '/:id/policies',
  checkAuthMiddleware,
  userController.getPoliciesByUserId
);

export default router;
