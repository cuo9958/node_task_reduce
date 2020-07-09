import { CronJob } from "cron";

let job: any = null;

export default function start() {
    job = new CronJob("* * * * * *", run).start();
    return job;
}

async function run() {
    console.log("run qiniu");
}
