import express from "express";
import { columnController } from "~/controllers/columnController";
import { columnValidation } from "~/validations/columnValidations";
const Router = express.Router();
Router.route("/")
  // chạy từ tầng route => validation => controller => service
  .post(columnValidation.createNew, columnController.createNew);
Router.route("/:id")
  .put(columnValidation.update, columnController.update)
  .delete(columnValidation.deleteItem, columnController.deleteItem);
export const columnRoutes = Router;
