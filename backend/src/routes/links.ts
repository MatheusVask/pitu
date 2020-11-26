import {Router} from 'express';
import controllers from '../controllers/links'

const router = Router();

router.post('/links', controllers.postLink)

router.get('/links/:code', controllers.hitLink)

router.get('/links/:code/stats', controllers.getLink)

export default router;