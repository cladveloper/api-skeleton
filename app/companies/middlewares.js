// Packages
import boom from "@hapi/boom";
// Imports
import CompanyService from "./services.js";
// Statements
const companyService = new CompanyService;
// Middlewares
export function getAllCompaniesFromDb(req,res,next){
    companyService.getAll()
    .then(companies => {
        req.responseMessage = "All records have been brought";
        req.responseCode = "BROUGHT";
        req.responseData = companies;
        next();
    })
    .catch(e => next(boom.badImplementation(e)));
}

export function getCompanyByIdFromDb(req,res,next){
    const {id} = req.params;
    companyService.getById(id)
    .then(company => {
        req.responseMessage = `The company with id ${company.id} has been brought`;
        req.responseCode = "BROUGHT";
        req.responseData = company;
        next();
    })
    .catch(e => next(boom.badImplementation(e)));
}

export function insertCompanyInDb(req,res,next){
    const {body} = req;
    companyService.createOne(body)
    .then(info => {
        req.responseMessage = "A new company has been created";
        req.responseCode = "CREATED";
        req.responseData = {...body, id: info.generated_keys[0]};
        next();
    })
    .catch(e => next(boom.badImplementation(e)));
}

export function updateCompanyByIdFromDb(req,res,next){
    const {body} = req;
    const {id} = req.params;
    companyService.updateById(id, body)
    .then(info => {
        req.responseMessage = `The company with id ${id} has been updated`;
        req.responseCode = "UPDATED";
        req.responseData = {...body, id};
        next();
    })
    .catch(e => next(boom.badImplementation(e)));
}

export function deleteCompanyByIdFromDb(req,res,next){
    const {id} = req.params;
    companyService.deleteById(id)
    .then(info => {
        req.responseMessage = `The company with id ${id} has been deleted`;
        req.responseCode = "REMOVED";
        req.responseData = {
            idRemoved: id
        };
        next();
    })
    .catch(e => next(boom.badImplementation(e)));
}