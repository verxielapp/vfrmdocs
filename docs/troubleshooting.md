# Troubleshooting

## Global komut görünmüyor
- `npm run build` ve ardından `npm link` uygulayın (`VeFramework/packages/cli` içinde)
- `npm bin -g` çıktısını PATH’e ekleyin (Windows: `setx PATH "$env:PATH;<bin>"`)
- Yeni bir terminal açın

## PostgreSQL bağlantısı başarısız
- `DATABASE_URL` doğru mu? Render.com’dan olduğu gibi kopyalayın
- Güvenlik grubu/erişim izinleri açık mı? (Render’da varsayılan uygundur)
- İlk deploy’da tablo oluşturma için logları kontrol edin

## Netlify/Build hataları
- Eksik bağımlılıkları `package.json`’a ekleyin
- ESLint uyarılarını düzeltin veya `CI=false` ile geçici olarak pasifleştirin

## VOIP ses yok
- Tarayıcı izinlerini kontrol edin
- STUN/ICE ayarlarını güncelleyin
- Ağ kısıtlarını test etmek için farklı bir bağlantı deneyin
