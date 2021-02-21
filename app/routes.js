// Imports
import companies from "./companies/routes.js";
// Export
export default function(app, express){
    // Router
    const router = express.Router();
    app.use("/", router);
    // Routes
    router.use("/companies", companies);
}