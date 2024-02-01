import { StatusCodes } from "http-status-codes";
import { cardService } from "~/services/cardService";

const createNew = async (req, res, next) => {
  try {
    const createdNewcard = await cardService.createNew(req.body);
    // Có kq trả về client
    res.status(StatusCodes.CREATED).json(createdNewcard);
  } catch (error) {
    next(error);
  }
};

export const cardController = {
  createNew
};
