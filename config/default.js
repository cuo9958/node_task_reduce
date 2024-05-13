/**
 * 默认配置
 */

module.exports = {
    //开发环境数据库
    db: {
        host: "127.0.0.1",
        port: "3306",
        database: "fe_test",
        user: "fe_test",
        password: "fe_test",
        connectionLimit: 2,
    },
    //开发环境，普通redis配置
    redis: {
         host: '120.78.57.59',
        password: '123456abc',
    },
    //mongodb配置
    mg: {
        name: "fe_topic",
        reset: "",
        url: "mongodb://127.0.0.1:27017",
    },
    //七牛的配置
    qiniu: {
        //key
        accessKey: "",
        //key
        secretKey: "",
        //空间名称
        scope: "",
        //域名前缀
        path: "",
    },
    //接口的鉴权token
    token: "test",
};
