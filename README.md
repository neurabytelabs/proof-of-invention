# Proof of Invention

İçinde yapay zekâ olmayan bir prompt makinesi. "İmkânsız ama gerçek" türünde inşa promptları üretir ve bu promptların gerçekten koşulduğunu dürüst bir galeriyle gösterir.

Repo şu an tasarım aşamasında: makineyi inşa edecek meta-prompt ve dayandığı niyet sözleşmesi burada.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `prompts/meta-prompt-v1.md` | Makineyi inşa ettirecek prompt (İngilizce). Olduğu gibi yapıştırılır. |
| `docs/niyet-sozlesmesi-v1.md` | Prompt'un dayandığı kararlar ve nasıl bulundukları (Türkçe). |

## Çalıştırma

1. Bu klasörde temiz bir Claude Code oturumu aç; en güçlü model, en yüksek effort.
2. `pbcopy < prompts/meta-prompt-v1.md` ile prompt'u panoya al ve ilk mesaj olarak yapıştır.
3. Beklenen çıktı: bu klasörde tek bir `index.html` ve bir rapor (alan listesi, kademe başına örnek prompt, self-test sonuçları, kesilenler, sözleşmeye itirazlar).

## İnşadan sonraki döngü

makineden prompt çek → Claude'da koş → 20 saniyelik kaydı al → `index.html` içindeki galeri JSON'una dürüst bir kart ekle (çalıştıysa da çöktüyse de) → paylaş
