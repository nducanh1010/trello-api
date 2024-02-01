import express from "express";
import { cardController } from "~/controllers/cardController";
import { cardValidation } from "~/validations/cardValidations";
const Router = express.Router();
Router.route("/")
  // chạy từ tầng route => validation => controller => service
  .post(cardValidation.createNew, cardController.createNew);
export const cardRoutes = Router;
