import Joi from "joi";

const BOARD_COLLECTION_NAME = "boards";
const BOARD_COLLECTION_SCHEMA = Joi.object({
  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().required().min(3).max(256).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  columnOrderIds:Joi.array().items(Joi.string()).default([]),
  createdAt:Joi.date().timestamp('javascript').default(Date.now),
  _destroy:Joi.boolean().default(false) //soft_delete
});
export const boardModel={
    BOARD_COLLECTION_NAME,
    BOARD_COLLECTION_SCHEMA
}