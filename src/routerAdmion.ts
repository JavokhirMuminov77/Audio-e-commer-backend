import express from 'express';
const routerAdmin = express.Router();
import adminController from './controller/admin.controller';

routerAdmin.get("/", adminController.goHome);

routerAdmin
  .get("/login", adminController.getLogin)
//   .post("/login", adminController.processLogin);

routerAdmin
  .get("/signup", adminController.getSignup)
//   .post("/signup", adminController.procesSignup);

export default routerAdmin;