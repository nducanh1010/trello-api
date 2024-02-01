import express from "express";
import { columnController } from "~/controllers/columnController";
import { columnValidation } from "~/validations/columnValidations";
const Router = express.Router();
Router.route("/")
  // chạy từ tầng route => validation => controller => service

  .post(columnValidation.createNew, columnController.createNew);
export const columnRoutes = Router;
