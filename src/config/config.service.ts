import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string | undefined {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value;
  }

  ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  getPort() {
    return this.getValue('PORT', true);
  }

  isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  getTypeOrmConfig() {
    return {
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(`${this.getValue('POSTGRES_PORT')}`),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DB'),
      synchronize: this.getValue('TYPEORM_SYNCHRONIZE') === 'true',
      logging: this.getValue('TYPEORM_LOGGING') === 'true',
      entities: ['**/*.entity{.ts,.js}'],
      migrationTableName: 'migration',
      migrations: ['migrations/*{.ts,.js}'],
      cli: {
        migrationsDir: 'migrations',
      },
      ssl: this.isProduction(),
    };
  }
}
const configService = new ConfigService(process.env).ensureValues([
  'DATABASE_USER',
  'DATABASE_PASSWORD',
  'DATABASE_HOST',
  'DATABASE_PORT',
  'DATABASE_NAME',
]);

export { configService };
