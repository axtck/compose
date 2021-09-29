const penv = {
    port: process.env.PORT,
    mysqlUser: process.env.MYSQL_USER,
    mysqlPw: process.env.MYSQL_PASSWORD,
    mysqlDb: process.env.MYSQL_DATABASE,
    mysqlHost: process.env.MYSQL_HOST
};

module.exports = penv;