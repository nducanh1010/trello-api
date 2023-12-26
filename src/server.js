import express from "express";
import { CONNECT_DB, GET_DB } from "~/config/mongodb";
import { env } from "~/config/environment";
import "dotenv/config";
import { APIS_V1 } from "./routes/v1";
const START_SERVER = () => {
  const app = express();
  // cho phép parse json ( enable parse req.body.json data)
  app.use(express.json());
  // use APIS_V1
  app.use("/v1", APIS_V1);
  app.get("/", (req, res) => {
    // Test Absolute import mapOrder
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(env.APP_PORT);
  });
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
