import express from 'express';
import { getBeers, getBeerById } from '../controllers/beers';

const router = express.Router();

router.get('/beers', getBeers);
router.get('/beers/:id', getBeerById);

export default router;