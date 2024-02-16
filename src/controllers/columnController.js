import { StatusCodes } from "http-status-codes";
import { columnService } from "~/services/columnService";

const createNew = async (req, res, next) => {
  try {
    const createdNewcolumn = await columnService.createNew(req.body);
    // Có kq trả về client
    res.status(StatusCodes.CREATED).json(createdNewcolumn);
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const columnId = req.params.id;
    const updatedColumn = await columnService.update(columnId, req.body);
    res.status(StatusCodes.OK).json(updatedColumn);
  } catch (error) {
    next(error);
  }
};
const deleteItem = async (req, res, next) => {
  try {
    const columnId = req.params.id;
    const updatedColumn = await columnService.deleteItem(columnId);
    res.status(StatusCodes.OK).json(updatedColumn);
  } catch (error) {
    next(error);
  }
};
export const columnController = {
  createNew,
  update,
  deleteItem
};
