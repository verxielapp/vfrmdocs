# Project Structure

VeFramework monoreposu ve oluşturulan projeler benzer ama amaç odaklı bir dizin yapısı kullanır.

## Monorepo
```
VeFramework/
  packages/
    core/          # çekirdek kütüphane
    cli/           # komut satırı aracı
  templates/       # proje şablonları
  examples/        # örnek uygulamalar
```

## Oluşturulan proje (basic)
```
my-app/
  src/
    index.js       # örnek sunucu başlangıcı
  veframework.config.js
  package.json
```

Bu yapı, modülleri ve kullanım örneklerini ayrı tutarak gelişmeyi kolaylaştırır.
