export class DbConfig {
  // static connection = {
  //   database: process.env.DB_NAME,
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   options: {
  //     host: process.env.DB_HOST,
  //     dialect: 'postgres',
  //     logging: false,
  //   }
  // },
  static connection = {
    type: "sqlite",
    database: './sqlite3.db',
    host: "localhost",
    logging: false,
  }
}
