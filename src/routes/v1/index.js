import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRoutes } from "./boardRoute";
import { columnRoutes } from "./columnRoute";
import { cardRoutes } from "./cardRoute";
const Router = express.Router();
Router.get("/status", (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ message: "API ready to use", code: StatusCodes.OK });
});
/*
Board APIS
*/
Router.use("/boards", boardRoutes);
/*
Column APIS
*/
Router.use("/columns", columnRoutes);

/*
Card APIS
*/
Router.use("/cards", cardRoutes);

export const APIS_V1 = Router;
