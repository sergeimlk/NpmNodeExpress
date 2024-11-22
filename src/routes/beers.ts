import { Router } from 'express';
import { getAllBeers, getBeer } from '../controllers/beersController';

export const router = Router();

router.get('/', getAllBeers);
router.get('/:id', getBeer);

// Ajoutez d'autres routes pour les requêtes HTTP nécessaires