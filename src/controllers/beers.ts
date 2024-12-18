import { Request, Response } from "express";
import { query } from "../config/db";


export const getBeers = async (req: Request, res: Response) => {
    try {
        const result = await query(`SELECT * FROM beers`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch beers' });
    }

};

export const getBeerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
const beerId = parseInt(id, 10); // Convert to integer
const result = await query(
             `SELECT *
              FROM beers
              WHERE beers.id_beer = $1`,
            [id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Beer not found' });
            return;
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch beer' });
    }
};

export const createBeer = async (req: Request, res: Response): Promise<void> => {
    try {
        // Validation des données d'entrée
        const { name, description, abv, price, id_brewery } = req.body;
        if (!name || !description || !abv || !price || !id_brewery) {
            res.status(400).json({ error: 'Missing required fields: name, description, abv, price, id_brewery' });
            return;
        }

        // Insertion dans la base de données
        const result = await query(
            `INSERT INTO beers (name, description, abv, price, id_brewery)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [name, description, abv, price, id_brewery]
        );

        // Retourner la bière créée
        res.status(201).json(result.rows[0]);
    } catch (error: any) {
        console.error(error);

        // Vérification si l'erreur provient de la base de données
        if (error.code === '23503') {
            // Code d'erreur PostgreSQL pour violation de contrainte de clé étrangère
            res.status(400).json({ error: 'Invalid brewery ID' });
        } else {
            res.status(500).json({ error: 'Failed to create beer' });
        }
    }
};

export const updateBeer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { name, description, abv, price} = req.body;

        const result = await query(
            `UPDATE beers
             SET name=$1, description=$2, abv=$3, price=$4
WHERE id_beer=$2
             RETURNING *`,
            [name, description, abv, price, id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Beer not found' });
            return;
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update beer' });
    };

};


export const deleteBeer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const result = await query('DELETE FROM beers WHERE id_beer = $1 RETURNING *', [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Beer not found' });
            return;
        }

        res.json({ message: 'Beer deleted successfully' });
    } catch (error) {
        if (error instanceof Error) {
            if ((error as any).code === '23503') { // Cast error as any if code isn't part of Error
                res.status(400).json({
                    error: 'Cannot delete beer because it is referenced in reviews. Please delete associated reviews first.',
                });
            } else {
                res.status(500).json({ error: error.message });
            }
        } else {
            console.error('Unknown error occurred:', error);
            res.status(500).json({ error: 'An unexpected error occurred' });
        }
    }
};