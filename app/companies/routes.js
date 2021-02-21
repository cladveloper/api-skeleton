// Packages
import express from "express";
import {getAllCompanies, getCompanyById, createCompany, updateCompanyById, deleteCompanyById} from "./responses.js";
// Statements
const router = express.Router();
// Routes
router.route("/")
    .get(...getAllCompanies)
    .post(...createCompany)
router.route("/:id")
    .get(...getCompanyById)
    .put(...updateCompanyById)
    .delete(...deleteCompanyById);
//Export
export default router;