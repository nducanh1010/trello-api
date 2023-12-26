import { StatusCodes } from "http-status-codes";

const createNew = async (req, res, next) => {
  try {
    console.log("req query", req.query);
    res
      .status(StatusCodes.CREATED)
      .json({ message: " Post from controller APi CREATED new boards", code: StatusCodes.OK });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: error.message,
    });
  }
};
export const boardController = {
  createNew,
};
