const envPath = "./config/env/" + process.env.NODE_ENV + ".env";
require("dotenv").config({ path: envPath });

// requiree
import server from "./server.config";
import mongo from "./mongo.config";
import error from "./error.config";
import auth from "./auth.config";

export default {
  env: process.env.NODE_ENV,
  server,
  mongo,
  error,
  auth,
};
