import { StatusCodes } from "http-status-codes";
import { boardService } from "~/services/boardService";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    console.log("req query", req.query);
    // throw new ApiError(StatusCodes.BAD_REQUEST, "erroe from bCtrl");
    //Điều hướng dữ liệu sang tầng service
    const createdNewBoard=await boardService.createNew(req.body)
    // Có kq trả về client
    res
      .status(StatusCodes.CREATED)
      .json({ createdNewBoard});
  } catch (error) {
    next(error);
  }
};
export const boardController = {
  createNew,
};
