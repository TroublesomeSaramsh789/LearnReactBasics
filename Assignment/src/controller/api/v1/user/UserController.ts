import Express, { Request, Response } from "express";
import UserSchema from "./../../../../model/schema/userSchema";
import ReadUser from "./../../../../database/read/readUser";
import InsertUser from "./../../../../database/insert/insertUser";
import { InsertUserType } from "./../../../../../index.d";
const UserController = Express.Router();

UserController.get("/", (req: Request, res: Response) => {
  ReadUser()
    .then((data) => {
      res.send(data);
    })
    .catch((data) => {
      res.send(data);
    });
});
UserController.get("/:id", (req: Request, res: Response) => {
  const id  = req.params.id;
  ReadUser(id)
    .then((data) => {
      res.send(data);
    })
    .catch((data) => {
      res.send(data);
    });
});

UserController.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  const { username, email, phone, password, userType } = req.body;
  const userData: InsertUserType = {
    username,
    email,
    phone,
    password,
    userType,
  };
  const { error, value } = UserSchema.validate(userData);
  if (error) res.send(error);
  else {
    InsertUser({ ...userData })
      .then((data) => res.send(data))
      .catch((error) => res.send(error));
  }
});

export default UserController;
