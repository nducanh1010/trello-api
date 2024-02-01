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

export const columnController = {
  createNew
};
