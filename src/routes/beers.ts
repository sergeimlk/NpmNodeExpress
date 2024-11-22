import { Router, Request, Response } from "express";
import { beersController } from "../controllers/beers";


export const router = Router();


router.get("/", beersController.get);

router.post("/", beersController.post);

router.put("/:id", (req: Request, res: Response) => {
  res.send("Modifier une bière avec l'ID : " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("Supprimer une bière avec l'ID : " + req.params.id);
});