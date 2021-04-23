import Sequelize from 'sequelize';
import Permission from '../app/models/Permission';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [ 
   User,
   Permission,
]

class Database{
   constructor(){
    this.init()
   }

   init(){
      this.connection = new Sequelize(databaseConfig);
      
      models
         .map( model => model.init(this.connection))
         .map( model => model.associate && model.associate(this.connection.models));
   }
}

export default new Database();