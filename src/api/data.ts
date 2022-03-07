import Router from "@koa/router";
import CheckAuth from "../middleware/checkAuth";
import { getToken } from "../service/qiniu";
import { getToken2 } from "../service/qiniu2";
import { BeError, BeSuccess } from "../utils/response";

const router = new Router();

router.get("/qiniu", CheckAuth, async function (ctx) {
  try {
    const data = await getToken();
    ctx.body = BeSuccess(data || "");
  } catch (error) {
    console.log(error.message);
    ctx.body = BeError(error.message);
  }
});
router.get("/qiniu2", CheckAuth, async function (ctx) {
  try {
    const data = await getToken2();
    ctx.body = BeSuccess(data || "");
  } catch (error) {
    console.log(error.message);
    ctx.body = BeError(error.message);
  }
});

export default router.routes();
