module.exports = {
  development: {
    username: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DB,
    host: process.env.POSTGRESQL_HOST,
    port: process.env.POSTGRESQL_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
    seederStorage: 'sequelize',
    sslmode: 'disable',
  },
  heroku: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    seederStorage: 'sequelize',
    sslmode: 'require',
  },
};
