import express from "express";
import { CONNECT_DB, GET_DB } from "~/config/mongodb";
import { env } from "~/config/environment";
import cors from "cors";
import "dotenv/config";
import { APIS_V1 } from "~/routes/v1";
import { errorHandlingMiddleware } from "~/middlewares/errorHandlingMiddleware";
import { corsOptions } from "./config/cors";
const START_SERVER = () => {
  const app = express();
  //cors
  app.use(cors(corsOptions));
  // cho phép parse json ( enable parse req.body.json data)
  app.use(express.json());
  // use APIS_V1
  app.use("/v1", APIS_V1);
  app.get("/", (req, res) => {
    // Test Absolute import mapOrder
    res.end("<h1>Hello World!</h1><hr>");
  });

  /*
    Middleware xử lí lỗi tập trung
  */
  app.use(errorHandlingMiddleware);
  if (env.BUILD_MODE === "production") {
    app.listen(process.env.PORT, () => {});
  } else {
    app.listen(env.LOCAL_DEV_APP_PORT, env.LOCAL_DEV_APP_HOST, () => {
      console.log(env.LOCAL_DEV_APP_PORT);
    });
  }
};
CONNECT_DB()
  .then(() => {
    console.log("Connected to mongodb atlas ");
  })
  .then(() => {
    START_SERVER();
  })
  .catch((er) => {
    console.log("er", er);
    process.exit(0);
  });
