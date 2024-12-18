import express from 'express';
import { getBeers, getBeerById, createBeer, updateBeer, deleteBeer} from '../controllers/beers';

const router = express.Router();


router.get('/', getBeers);
router.get('/:id', getBeerById);
router.post('/', createBeer);
router.put('/:id', updateBeer);
router.delete('/:id', deleteBeer);


export default router;