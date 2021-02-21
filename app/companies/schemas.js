// Packages
import Joi from "@hapi/joi";
// Schemas
const createCompanySchema = {
    subdomain: Joi.string().uri().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).regex(/^\S+$/).required(),
    logo: Joi.object({
        image: Joi.string().base64(),
        extension: Joi.string().valid("jpg", "png")
    })
}
//Export
export {createCompanySchema}