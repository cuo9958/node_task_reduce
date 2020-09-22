import Router from "koa-router";
import CheckAuth from "../middleware/checkAuth";
import { Success, Error } from "../middleware/resp";
import { getToken } from "../service/qiniu";
import { getToken2 } from "../service/qiniu2";

const router = new Router();

router.get("/qiniu", CheckAuth, async function (ctx) {
    try {
        const data = await getToken();
        ctx.body = Success(data || "");
    } catch (error) {
        Error(error.message);
    }
    console.log("end");
});
router.get("/qiniu2", CheckAuth, async function (ctx) {
    try {
        const data = await getToken2();
        ctx.body = Success(data || "");
    } catch (error) {
        Error(error.message);
    }
});

export default router.routes();
