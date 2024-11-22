import { Router } from "express";
import { getBreweries, getBreweryById } from '../controllers/breweries';

export const router = Router();

/**
 * @swagger
 * /api/v1/breweries:
 *   get:
 *     summary: Get all breweries
 *     responses:
 *       200:
 *         description: A list of breweries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brewery'
 */
router.get("/", getBreweries);

/**
 * @swagger
 * /api/v1/breweries/{id}:
 *   get:
 *     summary: Get a brewery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The brewery ID
 *     responses:
 *       200:
 *         description: A single brewery
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brewery'
 *       404:
 *         description: Brewery not found
 */
router.get("/:id", getBreweryById);

// Ajoutez d'autres routes pour les brasseries (POST, PUT, DELETE)
router.post("/", (req, res) => {
    // Logique pour ajouter une nouvelle brasserie
    res.status(201).json({ message: "Nouvelle brasserie ajoutée!" });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    // Logique pour mettre à jour une brasserie existante
    res.status(200).json({ message: `Brasserie ${id} mise à jour!` });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    // Logique pour supprimer une brasserie existante
    res.status(200).json({ message: `Brasserie ${id} supprimée!` });
});