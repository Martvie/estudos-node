import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();
const userController = new UserController;

router.get("/user", userController.getAllUsers);
router.post("/user", userController.createUser);
router.delete("/user", userController.deleteUser);
