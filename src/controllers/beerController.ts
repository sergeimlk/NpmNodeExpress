import { Request, Response } from 'express';
import { getBeers, getBeerById } from '../services/beerService';

export const getAllBeers = async (req: Request, res: Response) => {
  try {
    const beers = await getBeers();
    res.status(200).json(beers);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getBeer = async (req: Request, res: Response) => {
  try {
    const beer = await getBeerById(parseInt(req.params.id, 10));
    if (beer) {
      res.status(200).json(beer);
    } else {
      res.status(404).json({ message: 'Beer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Ajoutez d'autres contrôleurs pour les requêtes HTTP nécessaires