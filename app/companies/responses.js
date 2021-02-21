import {validationHandler} from "../../utils/middlewares/validationHandler.js";
import {getAllCompaniesFromDb, getCompanyByIdFromDb, insertCompanyInDb, updateCompanyByIdFromDb, deleteCompanyByIdFromDb} from "./middlewares.js";
import defaultResponse from "../../utils/responses/defaultResponse.js";
import {createCompanySchema, updateCompanySchema, idSchema} from "./schemas.js";
// Routes
const getAllCompanies = [
    getAllCompaniesFromDb,
    defaultResponse
]
const getCompanyById = [
    validationHandler(idSchema, "params"),
    getCompanyByIdFromDb,
    defaultResponse
]
const createCompany = [
    validationHandler(createCompanySchema),
    insertCompanyInDb,
    defaultResponse,
]
const updateCompanyById = [
    validationHandler(idSchema, "params"),
    validationHandler(updateCompanySchema),
    updateCompanyByIdFromDb,
    defaultResponse
]
const deleteCompanyById = [
    validationHandler(idSchema, "params"),
    deleteCompanyByIdFromDb,
    defaultResponse
]

export {getAllCompanies, getCompanyById, createCompany, updateCompanyById, deleteCompanyById}