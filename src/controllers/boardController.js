import { StatusCodes } from "http-status-codes";
import { boardService } from "~/services/boardService";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    // throw new ApiError(StatusCodes.BAD_REQUEST, "erroe from bCtrl");
    //Điều hướng dữ liệu sang tầng service
    const createdNewBoard = await boardService.createNew(req.body);
    // Có kq trả về client
    res.status(StatusCodes.CREATED).json({ createdNewBoard });
  } catch (error) {
    next(error);
  }
};
const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const detailBoard = await boardService.getDetails(boardId);
    res.status(StatusCodes.OK).json(detailBoard);
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const updatedBoard = await boardService.update(boardId, req.body);
    res.status(StatusCodes.OK).json(updatedBoard);
  } catch (error) {
    next(error);
  }
};
const moveCardDifferentColumn = async (req, res, next) => {
  try {
    const result = await boardService.moveCardDifferentColumn(req.body);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};
export const boardController = {
  createNew,
  getDetails,
  update,
  moveCardDifferentColumn
};
