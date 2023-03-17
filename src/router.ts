import Router from "@koa/router";

import test from "./api";
import data from "./api/data";

const router = new Router();

//对外提供的接口
router.use("/api/test", test);
router.use("/api/data", data);

export default router;
