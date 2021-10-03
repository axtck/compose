const penv = {
    port: process.env.PORT,
    mysqlHost: process.env.MYSQL_HOST,
    mysqlPort: process.env.MYSQL_PORT,
    mysqlDb: process.env.MYSQL_DATABASE,
    mysqlUser: process.env.MYSQL_USER,
    mysqlPw: process.env.MYSQL_PASSWORD
};

module.exports = penv;