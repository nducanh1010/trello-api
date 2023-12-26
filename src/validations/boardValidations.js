import { StatusCodes } from "http-status-codes";
import Joi from "joi";

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
    console.log(error);
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error: new Error(error).message,
    });
  }
};
export const boardValidation = { createNew };
