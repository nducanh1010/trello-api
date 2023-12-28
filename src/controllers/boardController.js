import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    console.log("req query", req.query);
    throw new ApiError(StatusCodes.BAD_REQUEST, "erroe from bCtrl");
    // res
    //   .status(StatusCodes.CREATED)
    //   .json({ message: " Post from controller APi CREATED new boards", code: StatusCodes.OK });
  } catch (error) {
    next(error);
  }
};
export const boardController = {
  createNew,
};
