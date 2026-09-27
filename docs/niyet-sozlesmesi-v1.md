# Niyet Sözleşmesi v1 — Proof of Invention

**Tarih:** 2026-09-28 · **Sahip:** Patron · **Durum:** onaylandı (meta-prompt biçimi: B)
**Teknik:** Çift yönlü reverse prompting. Önce örnek prompt tersine çözüldü (DNA), sonra sohbet tersine çevrildi (flipped interaction: her soruda aynı tohumdan üretilmiş kontrast örnekler gösterildi), en sonda niyet bu sözleşmeye yansıtıldı.

> Herkese açık ve içinde yapay zekâ olmayan bir prompt makinesi. "İmkânsız ama gerçek" türünde, paylaşıldığında "bu gerçek mi?!" dedirten inşa promptları üretiyor. Bu promptların gerçekten koşulduğunu da, çökenler dahil, dürüst bir galeriyle kanıtlıyor.

## Örneğin DNA'sı (8 gen)

| Gen | Örnekteki karşılığı |
|---|---|
| İlkel başlangıç | "starting from individual logic gates" |
| Soyutlama merdiveni | CPU → bellek → assembler → OS → oyun |
| Hile yasağı | "not in javascript pretending" |
| Oynanabilir ödül | "so i can play the game" |
| Kesintisiz zoom | "zoom all the way down… watch the signals flow" |
| İspat çerçevesi | "proving you could have invented computing yourself" |
| Tam gaz | "go all out" |
| Yapılabilirlik (gizli gen) | Merdiven Nand2Tetris'in üstüne kurulu: çılgınca görünüyor ama yapılabiliyor |

Asıl zekâ hile yasağıyla zoom'un birbirine kilitlenmesinde: zoom, yasağa uyulduğunu gözle görülür kılıyor.

## Kararlar

| Alan | Karar | Nasıl seçildi |
|---|---|---|
| Amaç | Paylaşılabilir wow | Soru 1 (müzik tohumu, 4 kontrast) |
| Wow kaynağı | İmkânsız ama gerçek | Soru 2 (internet tohumu, 4 kontrast) |
| Kullanıcı | Herkese açık makine + "gerçekten koşuldu" galerisi | Soru 3 |
| Motor | Gen motoru: çalışırken LLM yok, en az 40 alanlık atlas, her cümle bir gene izlenebilir | Soru 4 |
| Kalıcılık | Aynı numara her zaman aynı prompt; atlas yalnızca büyür | Motordan türedi |
| Cesaret | Kıvılcım / inşa / tam gaz: aynı genler, merdiven boyu ve ödül değişir | Soru 5 |
| Galeri | Her koşu görünür (çöken de); hile yasağı hükmü + postmortem | Soru 6 |
| İmza etkileşim | Prompt → cümle → gen → atlas kaydı zoom'u | Motordan türedi |
| #0000 | Makinenin doğum promptu = meta-prompt'un ilk paragrafı, motordan birebir | Öneri, onaylandı |
| Ortam | Tek, kendi kendine yeten HTML; backend yok | Varsayılan, onaylandı |
| Dil | Promptlar ve arayüz İngilizce | Varsayılan, onaylandı |
| Kapsam dışı | Hesap, backend, çalışma anında LLM, sayfa içinde koşu, yükleme, analitik, ödeme | Varsayılan, onaylandı |
| Meta-prompt biçimi | B: meydan okuma paragrafı (#0000) + sıkıştırılmış sözleşme | Soru 7 |

## Kabul testleri

1. Rastgele 20 üretimde saçma ya da yapılamayacak prompt yok.
2. Aynı numara her zaman aynı promptu veriyor.
3. Her promptun her cümlesinden zoom'la ait olduğu gene inilebiliyor.
4. #0000, meta-prompt'un ilk paragrafını motordan birebir üretiyor.

**Yayın öncesi (Patron):** Galeride en az üç dürüst kart.
