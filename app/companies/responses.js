// Imports
import {user, users} from "../../utils/mocks/users.js";

export function getAllUsers(req,res){
    res.json(users);
}

export function getUserById(req,res){
    res.json(user);
}