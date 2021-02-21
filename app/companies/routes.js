// Packages
import express from "express";
// Imports:middlewares
import {validationHandler} from "../../utils/middlewares/validationHandler.js";
import {createUser, updateUserById, deleteUserById} from "./middlewares.js";
// Imports:responses
import defaultResponse from "../../utils/responses/defaultResponse.js";
import {getAllUsers, getUserById} from "./responses.js";
// Imports:schemas
import {createCompanySchema, updateCompanySchema} from "./schemas.js";
// Statements
const router = express.Router();
// Routes
router.get("/", getAllUsers);
router.get("/:id", validationHandler(idParamsSchema, "params"), getUserById);
router.post("/", validationHandler(createCompanySchema), createUser, defaultResponse);
router.put("/:id", validationHandler(idParamsSchema, "params"), validationHandler(updateCompanySchema), updateUserById, defaultResponse);
router.delete("/:id", validationHandler(idParamsSchema, "params"), deleteUserById, defaultResponse);
//Export
export default router;