# Framework API

`VeFramework` sınıfının temel metotları:

```ts
new VeFramework(config)
.start(): Promise<void>
.stop(): Promise<void>
.addPlugin(plugin): void
.removePlugin(name): void
.addMiddleware(fn): void
.getConfig(): FrameworkConfig
.getApp(): Express
.getIO(): Server
```

Olaylar ve soket bağlantıları modüller tarafından eklenir. Ayrıntılar için modül dokümanlarına bakın.
