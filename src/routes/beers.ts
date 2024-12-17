import express from 'express';
import { getBeers } from '../controllers/beers';

const router = express.Router();

router.get('/beers', getBeers);
// router.get('/beers/:id');

export default router;