import pool from '../config/db';

export const getBeers = async () => {
  const result = await pool.query('SELECT * FROM beers');
  return result.rows;
};

export const getBeerById = async (id: number) => {
  const result = await pool.query('SELECT * FROM beers WHERE id = $1', [id]);
  return result.rows[0];
};

// Ajoutez d'autres fonctions pour les requêtes SQL nécessaires