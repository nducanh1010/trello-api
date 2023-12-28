import { boardModel } from "~/models/boardModel";
import ApiError from "~/utils/ApiError";
import { slugify } from "~/utils/formatters";

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };
    // Gọi tầng model để xử lí lưu bản ghi vào trong db
    const createdBoard = await boardModel.createNew(newBoard);
    // trardata
    return createdBoard;
  } catch (error) {}
};
export const boardService = {
  createNew,
};
