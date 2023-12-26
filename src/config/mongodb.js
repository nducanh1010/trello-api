import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "~/config/environment";
let databaseTrelloInstance = null;
// Khởi tạo một ddooosi tượng mongodb de ket noi
let mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// Kết nối đến DB
export const CONNECT_DB = async () => {
  // gọi kết nối tới mongodb atlas với uri
  await mongoClientInstance.connect();
  // KẾT NỐI OK lấy databasse theo tên
  databaseTrelloInstance = mongoClientInstance.db(env.DB_NAME);
};
// chỉ gọi hàm này sau khi conenct db thành công
export const GET_DB = () => {
  if (!databaseTrelloInstance) throw new Error("Must connect to db first !!");
  return databaseTrelloInstance;
};
