import { request, Request, Response } from "express";
import { pool } from '../config/db';
import { beersModel } from '../models/beersModel';

export const getBeersController = {
    get: async (req: Request, res: Response) => {

        try {
            // récupérer la co de la bdd
            //const data = select * from beers
            //const data =[];
            const result = beersModel.get();
            //console.log(result.rows);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({msg: error});
        }
}};



// export const postBeersController = {
//     post: async (req: Request, res: Response) => {

//         const { name, description, abv, type, color, price } = req.body

//         try {
//             // récupérer la co de la bdd
//             //const data = select * from beers
//             //const data =[];
//             const result = await query("INSERT INTO beers (name, description, abv, type, color, price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [name, description, abv, type, color, price])
//             //console.log(result.rows);
//             res.status(200).json({msg: 'Beers added successfully' });
//         } catch (error) {
//             res.status(404).json({msg: error});
//         }
// }};

// export const putBeersController = {
//     put: async (req: Request, res: Response) => {

//         const {  name, description, abv, type, color, price, id_beer } = req.body

//         try {
//             // récupérer la co de la bdd
//             //const data = select * from beers
//             //const data =[];
//             const result = await query("UPDATE beers SET name = $1, description = $2, abv = $3, type = $4, color = $5, price = $6 WHERE id_beer = $6", [name, description, abv, type, color, price, id_beer])
//             //console.log(result.rows);
//             res.status(200).json({msg: 'Beers modified successfully' });
//         } catch (error) {
//             res.status(404).json({msg: error});
//         }
// }};


// export const deleteBeersController = {
//     delete: async (req: Request, res: Response) =>{

//         const id_beer = parseInt(req.params.id)

//         try {
//             const result = await query("DELETE FROM beers WHERE id_beer = $1 RETURNING *", [id_beer]);
//             res.status(200).json({msg: 'User deleted successfully' });
//         } catch (error) {
//             res.status(404).json({msg: error, msg2: "ça bug sa mère"});
//         }
// }};



// export const getDetailsBeersController = {
//     get: async (req: Request, res: Response) => {
//         const id_beer = parseInt(req.params.id)
//         try {
//             // récupérer la co de la bdd
//             //const data = select * from beers
//             //const data =[];
//             const result = await query('SELECT * FROM beers WHERE id_beer = $1', [id_beer]);
//             //console.log(result.rows);
//             res.status(200).json(result.rows);
//         } catch (error) {
//             res.status(404).json({msg: error});
//         }
// }};