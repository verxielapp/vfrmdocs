# Configuration

Projeler, kökte `veframework.config.js` ile yapılandırılır.

## Örnek
```js
/** @type {import('@veframework/core').FrameworkConfig} */
module.exports = {
  appName: 'MyApp',
  server: {
    host: '0.0.0.0',
    port: 4000
  },
  security: {
    corsOrigin: '*',
    rateLimit: { windowMs: 60_000, max: 100 }
  },
  database: {
    type: process.env.DATABASE_URL ? 'postgres' : 'sqlite',
    url: process.env.DATABASE_URL,
    sqlite: { storage: 'data.sqlite' }
  },
  features: {
    chat: true,
    voip: false,
    file: true,
    notifications: true
  }
}
```

## Ortam değişkenleri
- `DATABASE_URL`: PostgreSQL bağlantısı
- `JWT_SECRET`: JWT imzalama anahtarı
- `CORS_ORIGIN`: CORS kaynağı

