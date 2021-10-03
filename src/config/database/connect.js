const connect = (mysql, penv) => {
    mysql.createConnection({
        host: penv.mysqlHost,
        port: penv.mysqlPort,
        user: penv.mysqlUser,
        password: penv.mysqlPw,
        database: penv.mysqlDb
    }).connect((err) => {
        if (err) throw new Error("connect", err.message);
        console.log("Connected!");
    });
};

module.exports = connect;