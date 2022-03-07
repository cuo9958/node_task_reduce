import Router from "@koa/router";
import { BeSuccess } from "../utils/response";

const router = new Router();

router.tget("/", function (ctx, next) {
  ctx.body = BeSuccess("成功");
});

export default router.routes();
