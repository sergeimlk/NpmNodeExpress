import express from 'express';
import {
    getBreweries,
    createBrewery,
    getBreweryById,
    updateBrewery,
    deleteBrewery
} from '../controllers/breweries';

const router = express.Router();

router.get('/', getBreweries);
router.get('/:id', getBreweryById);
router.post('/', createBrewery);
router.put('/:id', updateBrewery);
router.delete('/:id', deleteBrewery);

export default router;
