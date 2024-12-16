import express from 'express';
import { getBreweries, getBreweryById } from '../controllers/breweries';

const router = express.Router();

router.get('/', getBreweries);
router.get('/:id', getBreweryById);

export default router;