import { Router } from "express";
export const router = Router();

import { beersController } from "../controllers/beersController";
// import { postBeersController } from "../controllers/beersController";
// import { putBeersController } from "../controllers/beersController";
// import { deleteBeersController } from "../controllers/beersController";
// import { getDetailsBeersController } from "../controllers/beersController";

router.get('/', beersController.get);
// router.post('/', postBeersController.post);
// router.put('/', putBeersController.put);
// router.delete('/:id', deleteBeersController.delete);
// router.get('/:id', getDetailsBeersController.get);