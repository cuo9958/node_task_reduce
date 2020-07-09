import { CronJob } from "cron";
import { updateToken } from "../service/qiniu";

let job: any = null;

export default function start() {
    job = new CronJob("0 */59 * * * *", run).start();
    return job;
}

async function run() {
    console.log("run qiniu");
    updateToken();
}
