import { createConnection } from 'typeorm';

export class DbService{
  constructor(options, entities, logger){
    this.logger = logger;
    this.connection = await createConnection({
      ...options,
      entities
    })
    this.logger.info(`Db init with params: {host: ${options.host}, database: ${database}}`)
  }

  async auth(){
    try {
      await this.db.authenticate();
      this.logger.info('Db connection has been established successfully.');
    } catch (err) {
      this.logger.error(`Unable to connect to the database: ${err}`);
    }
  }

  async disconnect(){
    try {
      await this.connection.close()
      this.logger.info('Db disconnected successfully.');
    } catch (err){
      this.logger.error(`Database disconnection error: ${err}`);
    }
  }

  async sync(){
    try {
      await this.connection.synchronize();
      this.logger.info('Db is synchronized successfully.');
    } catch (err){
      this.logger.error('Db is synchronized with error:', err);
    }
  }

  async migrate(){
    try {
      await this.connection.runMigrations();
      this.logger.info('Db migration complete successfully.');
    } catch (err){
      this.logger.error('Db migration complete with error:', err);
    }
  };

  async migrateMigrate(){
    try {
      await this.connection.undoLastMigration();
      this.logger.info('Db migration revoke complete successfully.');
    } catch (err){
      this.logger.error('Db migration revoke complete with error:', err);
    }
  };
}
