import databaseConfig from './database.json';
import path from 'path';

interface IDatabaseConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'mariadb';
    timezone: string;
}

const configs = {
    development: {
        server: {
            host: 'localhost',
            port: 8080
        },
        database: databaseConfig.development as IDatabaseConfig,
        jwt: {
            privateKey: 'kaikeba'
        },
        storage: {
            dir: path.resolve(__dirname, '../attachments'),
            prefix: '/public/attachments'
        }
    },
    test: {
        server: {
            host: 'localhost',
            port: 8080
        },
        database: databaseConfig.test as IDatabaseConfig,
        jwt: {
            privateKey: 'kaikeba'
        },
        storage: {
            dir: path.resolve(__dirname, 'attachments'),
            prefix: '/public/attachments'
        }
    },
    production: {
        server: {
            host: 'localhost',
            port: 8080
        },
        database: databaseConfig.production as IDatabaseConfig,
        jwt: {
            privateKey: 'kaikeba'
        },
        storage: {
            dir: path.resolve(__dirname, 'attachments'),
            prefix: '/public/attachments'
        }
    }
};
/* 将类型约束在以上type之间 */
type configKeys = keyof typeof configs;

const NODE_EVN = process.env.NODE_ENV as configKeys || 'development';

export default configs[NODE_EVN];