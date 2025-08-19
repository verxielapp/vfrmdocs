# Getting Started

Bu sayfa, yeni bir proje oluşturmanın en hızlı yolunu gösterir.

## 1) Önkoşullar
- Node.js 18+
- npm 9+

## 2) Yeni proje oluştur
CLI yayınlandıysa:
```bash
veframework init my-app
```

CLI henüz yayınlanmadıysa (lokal):
```bash
# repo kökünde
cd VeFramework/packages/cli
npm run build
npm link

# artık global komut gelir
veframework init my-app
```

## 3) Çalıştır
```bash
cd my-app
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresine gidin (şablona göre değişebilir).

