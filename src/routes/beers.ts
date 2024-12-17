import express from 'express';
import { getBeers, getBeerById, createBeer, updateBeer } from '../controllers/beers';

const router = express.Router();


router.get('/beers', getBeers);
router.get('/beers/:id', getBeerById);
router.post('/beers', createBeer);
router.put('/beers/:id', updateBeer);



export default router;