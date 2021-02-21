// Imports
//import users from "./users/routes.js";
// Export
export default function(app, express){
    // Router
    const router = express.Router();
    app.use("/", router);
    // Routes
    //router.use("/users", users);
    router.use("/", (req,res) => res.json({sucess: true}));
}