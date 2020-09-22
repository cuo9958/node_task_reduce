/**
 * 提供默认处理数据的中间件
 */
import Koa from "koa";
import { IRouterParamContext } from "koa-router";

export type IRouterContext = Koa.ParameterizedContext &
    IRouterParamContext & {
        Success(data?: any): void;
        Error(data: any, code?: number): void;
    };

export function Success(data = "ok") {
    return {
        code: 1,
        data,
    };
}

export function Error(msg: string, code = 0) {
    return {
        code,
        msg,
    };
}
/**
 * 提供返回正确数据的方式
 * @param ctx ctx
 */
export async function sendSuccess(ctx: any, next) {
    const now = Date.now();

    ctx.Success = function (data = "ok") {
        ctx.body = {
            code: 1,
            data,
            t: Date.now() - now,
        };
    };
    await next();
}

/**
 * 提供返回默认错误和自定义code的形式
 * @param ctx ctx
 */
export async function sendError(ctx, next) {
    const now = Date.now();

    ctx.Error = function (msg: string, code = 0) {
        ctx.body = {
            code,
            msg,
            t: Date.now() - now,
        };
    };
    await next();
}
