import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);
// router.post("/products", checkPermission, create);
// router.delete("/products/:id", remove);
// router.put("/products/:id", checkPermission, update);

export default router;