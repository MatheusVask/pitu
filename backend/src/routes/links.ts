import {Router} from 'express';
import controllers from '../controllers/links'

const router = Router();

router.post('/links', controllers.postLink)

router.get('/links/:code', controllers.getLink)

router.get('/links/:code/stats', controllers.hitLink)

export default router;