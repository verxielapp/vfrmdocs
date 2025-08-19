# CLI Reference

VeFramework CLI minimal ve anlaşılır komutlar sağlar.

## Komutlar

### `init <project-name>`
Yeni bir proje oluşturur.
```bash
veframework init my-app
```
Seçenekler:
- `-t, --template <name>`: Şablon adı (varsayılan: `basic`)
- `-y, --yes`: Soruları atla, varsayılanları kullan

### `add <feature>`
Projeye bir özelliği eklemek için yapılandırma dosyasını günceller.
```bash
veframework add chat
```

### `build`
Projeyi üretime hazır derler.
```bash
veframework build
```

### `dev`
Geliştirme sunucusunu başlatır (şablona bağlıdır).
```bash
veframework dev
```

> Not: `deploy` komutu kaldırıldı.

