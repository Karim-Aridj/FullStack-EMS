import {Router} from "express";
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from "../controllers/employeeControllers";


const employeesRouter = Router();


employeesRouter.get("/", getEmployees)
employeesRouter.post("/", createEmployee)
employeesRouter.put("/: id", updateEmployee)
employeesRouter.delete("/: id", deleteEmployee)
/**we have created all 4 routes using that we can get employee details
 * we can create, update, delete the employee
 * right now this route is accessible by everyone, for that we have to create the middleware, using that we will protect this route and 
 * only admin can access this route
 * before that we create the Apis for authentication.
 */