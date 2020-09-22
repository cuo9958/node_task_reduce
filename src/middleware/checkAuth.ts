import config from "config";

const token = config.get("token");
/**
 * 校验接口的合法性
 */
export default async function (ctx: any, next: any) {
    if (ctx.headers["token"] === token) {
        await next();
    } else {
        ctx.Error("鉴权失败");
    }
}
