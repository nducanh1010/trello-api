import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  });
  try {
    //abortEarly trả về tất cả lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    next();
    // res
    //   .status(StatusCodes.CREATED)
    //   .json({ message: "APi CREATED new boards", code: StatusCodes.OK });
  } catch (error) {
    const errorMessage= new Error(error).message
    const customError=new ApiError(StatusCodes.UNPROCESSABLE_ENTITY,errorMessage)
    next(customError)
  }
};
export const boardValidation = { createNew };
