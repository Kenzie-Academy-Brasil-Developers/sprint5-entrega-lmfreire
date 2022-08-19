import { Router } from "express";

import userCreateController from "../controllers/userCreateController";
import userDeleteController from "../controllers/userDeleteController";
import userListController from "../controllers/userListController";
import userListOneController from "../controllers/userListOneController";
import userUpdateController from "../controllers/userUpdateController";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);
routes.patch("/users/:id", userUpdateController);
routes.delete("/users/:id", userDeleteController);

export default routes;
