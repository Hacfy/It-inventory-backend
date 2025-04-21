import express from 'express';
import {
  createAdmin,
  updateAdmin,
  getAllAdmins,
  getAdminById,
  deleteAdmin,
 
} from '../controllers/admin.controllers'



const router = express.Router();


router.post('/create', createAdmin);

router.put('/update/:id', updateAdmin);
router.get('/all', getAllAdmins);
router.get('/:id', getAdminById);
router.delete('/delete/:id', deleteAdmin);

export default router;
