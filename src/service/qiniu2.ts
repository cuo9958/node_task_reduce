import qiniu from "qiniu";
import config from "config";
import Redis from "../db/redis2";

const qiniu_config: any = config.get("qiniu2");
const qiniu_key = "qiniu_token_086006";

//更新实验室服务器的token
export async function updateToken2() {
    const mac = new qiniu.auth.digest.Mac(qiniu_config.accessKey, qiniu_config.secretKey);
    const options = {
        scope: qiniu_config.scope,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const token = putPolicy.uploadToken(mac);
    Redis.set(qiniu_key, token, "EX", 3600);
    console.log("设置七牛的token", token);
    return token;
}

export function getToken2() {
    return Redis.get(qiniu_key);
}
