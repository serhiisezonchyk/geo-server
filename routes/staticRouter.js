import Router from "express"
import * as staticController from "../controllers/staticController.js"

const router = new Router();

/**
 * @openapi
 * /api/static:
 *   post:
 *     tags:
 *       - Static Files
 *     summary: Upload a static file
 *     description: Upload a static file to the server
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *       400:
 *         description: No files were uploaded
 *       500:
 *         description: Error occurred while uploading the file
 */
router.post('/',staticController.create)
/**
 * @openapi
 * /api/static/{fileName}:
 *   delete:
 *     tags:
 *       - Static Files
 *     summary: Delete a static file
 *     description: Delete a static file from the server
 *     parameters:
 *       - in: path
 *         name: fileName
 *         required: true
 *         description: Name of the file to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: File deleted successfully
 *       500:
 *         description: Could not delete the file
 */
router.delete('/:fileName', staticController.destroy);


export default router;