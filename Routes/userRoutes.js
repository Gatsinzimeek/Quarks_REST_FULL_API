import express from 'express';
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from '../Controller/userController.js'

const router = express.Router();

router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
