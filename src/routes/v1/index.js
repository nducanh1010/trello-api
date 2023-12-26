import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRoutes } from "./boardRoute";
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
export const APIS_V1 = Router;
