export function createUser(req,res,next){
    const {body} = req;
    req.responseMessage = "A new user has been created";
    req.responseCode = "CREATED";
    req.responseData = body;
    next();
}

export function updateUserById(req,res,next){
    const {body} = req;
    const {id} = req.params;
    req.responseMessage = "The user with id 2 has been updated";
    req.responseCode = "UPDATED";
    req.responseData = {id, ...body};
    next();
}

export function deleteUserById(req,res,next){
    const {id} = req.params;
    req.responseMessage = "The user with id 2 has been deleted";
    req.responseCode = "REMOVED";
    req.responseData = id;
    next();
}