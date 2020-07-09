import qiniu from "qiniu";
import config from "config";
import Redis from "../db/redis";

const qiniu_config: any = config.get("qiniu");
const qiniu_key = "qiniu_token_huocheju";

export async function update() {
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
