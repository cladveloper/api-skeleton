// Packages
import Joi from "@hapi/joi";
// Schemas
const createCompanySchema = Joi.object({
    subdomain: Joi.string().uri().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).regex(/^\S+$/).required(),
    logo: Joi.object({
        image: Joi.string().base64().required(),
        extension: Joi.string().valid("jpg", "png").required()
    })
});
const updateCompanySchema = Joi.object({
    subdomain: Joi.string().uri(),
    email: Joi.string().email(),
    password: Joi.string().min(8).regex(/^\S+$/),
    logo: Joi.object({
        image: Joi.string().base64(),
        extension: Joi.string().valid("jpg", "png")
    })
});
const idSchema = Joi.object({
    id: Joi.string().guid({ version: ['uuidv4'] }).required()
})
//Export
export {createCompanySchema, updateCompanySchema, idSchema}