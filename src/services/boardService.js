import { StatusCodes } from "http-status-codes";
import { cloneDeep } from "lodash";
import { GET_DB } from "~/config/mongodb";
import { boardModel } from "~/models/boardModel";
import ApiError from "~/utils/ApiError";
import { slugify } from "~/utils/formatters";

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    };
    // Gọi tầng model để xử lí lưu bản ghi vào trong db
    const createdBoard = await boardModel.createNew(newBoard);
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId);
    // trardata
    return getNewBoard;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (boardId) => {
  try {
    const board = await boardModel.getDetails(boardId);
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Board not found");
    }
    const resBoard = cloneDeep(board);
    //euquals do mongo db ho tro
    resBoard.columns = resBoard.columns.map((column) => ({
      ...column,
      cards: resBoard.cards.filter((card) => card.columnId.equals(column._id))
    }));
    delete resBoard.cards;
    return resBoard;
  } catch (error) {
    throw error;
  }
};
const update = async (boardId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    };
    const updatedBoard = await boardModel.update(boardId, updateData);

    return updatedBoard;
  } catch (error) {
    throw error;
  }
};
export const boardService = {
  createNew,
  getDetails,
  update
};
