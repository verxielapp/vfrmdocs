# Installation

## Monorepo (Geliştirici modu)
Kaynak koddan çalışmak için:

```bash
# kök
npm install

# çekirdek ve CLI derle
npm --workspace @veframework/core run build
npm --workspace @veframework/cli run build
```

CLI’yi global linkleyerek kullanabilirsiniz:
```bash
cd VeFramework/packages/cli
npm link
veframework --help
```

## Proje içi kurulum
Oluşturduğunuz projede:
```bash
npm install
npm run dev
```

> Windows’ta global komut görünmüyorsa, `npm bin -g` çıktısını PATH’e ekleyin.

