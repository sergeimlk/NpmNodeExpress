import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({ data: "Liste des brasseries!" });
});

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