import expres from 'express';
import { updateComponentStatus } from '../controllers/report.controllers';
import { verifyHODToken } from '../middleware/auth.jwt';

const router = expres.Router();

router.post("/update",verifyHODToken ,updateComponentStatus);
export default router;