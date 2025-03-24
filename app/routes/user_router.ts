import express from 'express';
import { createUser } from '../controllers/user_controllers/create_user';
import { UpdateUser } from '../controllers/user_controllers/userUpdate';


const UserRouter = express.Router();

UserRouter.post("/create",createUser);
UserRouter.post("/update",UpdateUser);
UserRouter.get("/view/:id",UpdateUser);
UserRouter.delete("/delete/:id",UpdateUser);

export default UserRouter;
