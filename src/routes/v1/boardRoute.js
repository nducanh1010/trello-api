import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardController } from "~/controllers/boardController";
import { boardValidation } from "~/validations/boardValidations";
const Router = express.Router();
Router.route("/")
  .get((req, res) => {
    res
      .status(StatusCodes.OK)
      .json({ message: "API Get list boards", code: StatusCodes.OK });
  })
  // chạy từ tầng route => validation => controller => service
  .post(boardValidation.createNew, boardController.createNew);
Router.route("/:id")
  .get(boardController.getDetails)
  .put(boardValidation.update, boardController.update);
export const boardRoutes = Router;
