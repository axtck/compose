const connect = (mysql, penv) => {
    mysql.createConnection({
        host: penv.mysqlHost,
        user: penv.mysqlUser,
        password: penv.mysqlPw
    }).connect((err) => {
        if (err) throw new Error("connect", err.message);
        console.log("Connected!");
    });
};

module.exports = connect;