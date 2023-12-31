import { type Options, Sequelize } from 'sequelize'
import { CONFIG } from '../config'

const dbConfig: Options | any = CONFIG.dataBase.development

export const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, { host: dbConfig.host, dialect: dbConfig.dialect })
